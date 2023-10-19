import { createContext, useState, useContext } from "react";
import axios from "axios";
import { parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Swal from "sweetalert2";

const DevicesContext = createContext({
  devices: [],
  setDevices: () => {},
  modalDevices: [],
  setModalDevices: () => {},
  findDevices: () => {},
  fetchDevicesData: () => {},
  deviceIdOn: null,
  setDeviceIdOn: () => {},
});

export default function DevicesContextProvider({ children }) {
  const [devices, setDevices] = useState([]);
  const [modalDevices, setModalDevices] = useState([]);
  const [deviceIdOn, setDeviceIdOn] = useState(null);
  const [alertMessage, setAlertMessage] = useState({ type: "", message: "" });
  const navigate = useNavigate();

  function findDevices() {
    const token = sessionStorage.getItem("authToken");

    axios
      .get("http://localhost:3000/device/findDev", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setDevices(response.data);
        }
      })
      .catch((err) => {
        console.error("Error al obtener dispositivos:", err);
      });
  }

  function fetchDevicesData(tipo) {
    return axios
      .post(
        "http://localhost:3000/device/model",
        { variable: tipo },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          const uniqueBrands = [...new Set(data.map((device) => device.brand))];
          setModalDevices(data);
          return uniqueBrands;
        }
      })
      .catch((error) => {
        console.error("Error fetching devices data:", error);
      });
  }

  function addDevice(dataToSend) {
    const token = sessionStorage.getItem("authToken");

    return axios
      .post("http://localhost:3000/device/dev", dataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Dispositivo añadido exitosamente");
          Swal.fire({
            title: "Éxito",
            text: "Dispositivo añadido exitosamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
        }
        return response;
      })
      .catch((error) => {
        console.error("Error al añadir dispositivo:", error);
        throw error;
      });
  }

  function getDeviceById(id) {
    return devices.find((device) => device.id === Number(id));
  }

  function deleteDevice(id) {
    const token = sessionStorage.getItem("authToken");
    console.log(token);

    return axios
      .delete("http://localhost:3000/device/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { id },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Dispositivo eliminado exitosamente");
          setAlertMessage({
            type: "success",
            message: "Dispositivo eliminado correctamente",
          });
          setTimeout(() => {
            setAlertMessage({ type: "", message: "" });
          }, 4000);
        }
      })
      .then(() => {
        navigate("/dispositivos");
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.error("Error al eliminar dispositivo:", error);
      });
  }

  function switchDevice(idDevModel, idDevice) {
    const token = sessionStorage.getItem("authToken");
    let payload = { idDevModel, idDevice, id: deviceIdOn };

    if (deviceIdOn) {
      payload.id = deviceIdOn;
    }

    return axios
      .post("http://localhost:3000/device/", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setDevices(response.data); // Actualizo la lista de dispositivos en el estado

          // Busco por idDevice
          const deviceData = response.data.find(
            (device) => device.id === idDevice
          );
          //y obtengo el device_consumption id
          const deviceConsumptionId =
            deviceData?.device_consumption[0].id || null;

          // Guardo el device_consumption id para usarlo más tarde en el off
          setDeviceIdOn(deviceConsumptionId);

          console.log(deviceConsumptionId);

          findDevices(); // Llamada para actualizar la lista de dispositivos en on y off
          return response.data;
        }
      });
  }

  // Obtener la configuración de un dispositivo
  const getDeviceConfiguration = async (device) => {
    // Obtengo el token
    const token = sessionStorage.getItem("authToken");

    //Extraigo el id de "device"
    const { id } = device;

    // extraigo array y devuelvo un nuevo array de pares
    const getPairs = (arr) => {
      let pairs = [];
      //Recorro el array incrementando de 2 en 2
      for (let i = 0; i < arr.length; i += 2) {
        // Si existe un elemento siguiente, lo agrego junto con el actual como un par al nuevo array.
        if (arr[i + 1] !== undefined) {
          pairs.push([arr[i], arr[i + 1]]);
        }
      }
      return pairs;
    };

    try {
      //Petición para obtener la configuración del dispo
      const response = await axios.get(
        `http://localhost:3000/devControl/deviceConfiguration?deviceId=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response", response.data);
      // Convierto la respuesta en pares usando la función getPairs
      const dataByPairs = getPairs(response.data);
      console.log(dataByPairs);

      // Mapeo los pares para extraer y transformar los datos relevantes.
      // Por cada par, obtengo el tiempo de inicio y fin y devuelvo un objeto con esos valores.
      return dataByPairs.map(([start, end]) => ({
        id: start.id,
        start: parseISO(start.programTime), // Convierto el tiempo de inicio
        end: parseISO(end.programTime), // Convierto el tiempo de fin
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Función para guardar la configuración de un dispositivo.
  function saveDeviceConfiguration(device, config) {
    const token = sessionStorage.getItem("authToken");
    // Extraigo el id del modelo del dispositivo y el id del dispositivo de device.
    const { idDevModel, id: idDevice } = device;
    console.log(device);

    // Para cada configuración, genero dos objetos: uno para el tiempo de on y
    // otro para off.
    const payload = config
      ?.map(({ start, end }) => [
        {
          idDevModel,
          idDevice,
          programTime: start,
          operationType: "1",
        },
        {
          idDevModel,
          idDevice,
          programTime: end,
          operationType: "0",
        },
      ])
      // Convierto el array para tener un array  de objetos en lugar de un arrray de arrays.
      ?.flat();
    //Petición post para guardar la configuración con el payload transformado
    return axios
      .post("http://localhost:3000/devControl/programDev", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);

          Swal.fire({
            title: "Éxito",
            text: "Configuración guardada con éxito.",
            icon: "success",
            confirmButtonText: "Aceptar",
          });

          return response.data;
        }
      });
  }

  const value = {
    devices,
    setDevices,
    modalDevices,
    setModalDevices,
    findDevices,
    fetchDevicesData,
    addDevice,
    getDeviceById,
    switchDevice,
    deviceIdOn,
    setDeviceIdOn,
    getDeviceConfiguration,
    saveDeviceConfiguration,
    deleteDevice,
  };

  return (
    <DevicesContext.Provider value={value}>
      {alertMessage.message && (
        <Alert severity={alertMessage.type} sx={{ mb: 2 }}>
          {alertMessage.message}
        </Alert>
      )}
      {children}
    </DevicesContext.Provider>
  );
}

export function useDevicesContext() {
  return useContext(DevicesContext);
}
