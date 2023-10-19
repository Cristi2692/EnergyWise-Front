import { useState, useEffect } from "react";
import { useDevicesContext } from "../../context/DevicesContext";
import Sliders from "./Sliders";

export default function SlidersDummy() {
  const { devices, findDevices } = useDevicesContext();
  const [dispositivos, setDispositivos] = useState(devices);

  useEffect(() => {
    findDevices(); // Llamar a findDevices para actualizar los dispositivos en el contexto
  }, []); // Se ejecutará solo una vez al montar el componente

  useEffect(() => {
    setDispositivos(devices);
  }, [devices]);

  const handleSwitchChange = (event, id) => {
    setDispositivos((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, state: !device.state } : device
      )
    );
  };
  return (
    <Sliders
      dispositivos={dispositivos}
      handleSwitchChange={handleSwitchChange}
    />
  );
}
