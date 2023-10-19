import { useState } from "react";
import AddDeviceModalView from "./addDeviceModalView";
import { useDevicesContext } from "../../context/DevicesContext";

export default function AddDeviceModal({ isOpen, onClose, onSuccess }) {
  const { modalDevices, fetchDevicesData, addDevice, setDevices } =
    useDevicesContext();

  const deviceTypes = [
    "Tv",
    "Bombilla",
    "Lavadora",
    "Punto de carga",
    "Enchufe inteligente",
    "Termo",
  ];

  const [deviceData, setDeviceData] = useState({
    tipo: "",
    marca: "",
    modelo: "",
    nombre: "",
    filteredBrands: [],
    filteredModels: [],
    id: null,
    variable: "",
    successMessage: false,
    errorMessage: null,
    isMarcaEnabled: false,
    isModeloEnabled: false,
  });

  const resetData = () => {
    setDeviceData({
      tipo: "",
      marca: "",
      modelo: "",
      nombre: "",
      filteredBrands: [],
      filteredModels: [],
      id: null,
      variable: "",
    });
  };

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    let updatedData = { ...deviceData, [field]: value };

    if (field === "tipo") {
      fetchDevicesData(value).then((uniqueBrands) => {
        if (uniqueBrands) {
          updatedData.filteredBrands = uniqueBrands;
          updatedData.isMarcaEnabled = true;
        } else {
          updatedData.isMarcaEnabled = false; // Disable if no brands
        }
        setDeviceData(updatedData);
      });
    } else if (field === "marca") {
      const modelsForBrand = modalDevices
        .filter((device) => device.brand === value)
        .map((device) => device.model);
      updatedData.filteredModels = modelsForBrand;
      updatedData.isModeloEnabled = modelsForBrand.length > 0;
      setDeviceData(updatedData);
    } else if (field === "modelo") {
      const selectedDevice = modalDevices.find(
        (device) => device.model === value
      );
      if (selectedDevice) {
        updatedData.id = selectedDevice.id;
        updatedData.variable = selectedDevice.variable;
      }
      setDeviceData(updatedData);
    } else {
      setDeviceData(updatedData);
    }
  };

  const handleClose = () => {
    resetData();
    onClose();
  };

  const handleAdd = () => {
    const dataToSend = {
      name: deviceData.variable,
      idDevModel: deviceData.id,
      tag: deviceData.nombre,
    };

    addDevice(dataToSend)
      .then((updatedDevices) => {
        setDevices(updatedDevices.data);
        onSuccess("El dispositivo se ha añadido con éxito!");
        onClose();
      })
      .catch((error) => {
        console.error("Error al añadir dispositivo:", error);
        setDeviceData((prevState) => ({
          ...prevState,
          errorMessage:
            "Error al añadir dispositivo. Por favor, inténtelo nuevamente.",
        }));
        setTimeout(() => {
          setDeviceData((prevState) => ({
            ...prevState,
            errorMessage: "",
          }));
        }, 5000);
      });
  };

  return (
    <AddDeviceModalView
      isOpen={isOpen}
      onClose={onClose}
      {...deviceData}
      setTipo={handleInputChange("tipo")}
      setMarca={handleInputChange("marca")}
      setModelo={handleInputChange("modelo")}
      setNombre={handleInputChange("nombre")}
      deviceTypes={deviceTypes}
      handleClose={handleClose}
      handleAdd={handleAdd}
      isMarcaEnabled={deviceData.isMarcaEnabled}
      isModeloEnabled={deviceData.isModeloEnabled}
    />
  );
}
