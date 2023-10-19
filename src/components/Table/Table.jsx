import { useEffect, useState } from "react";
import TableView from "./TableView";
import { useDevicesContext } from "../../context/DevicesContext";
import AddDeviceModal from "../AddDeviceModal/AddDeviceModal";

export default function TableComponent() {
  const { devices, findDevices } = useDevicesContext();
  const [localDevices, setLocalDevices] = useState(devices);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    findDevices();
  }, []);

  useEffect(() => {
    setLocalDevices(devices);
  }, [devices]);

  const handleSwitchChange = (event, id) => {
    setLocalDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, state: !device.state } : device
      )
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AddDeviceModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <TableView
        onAddDeviceClick={handleOpenModal}
        dispositivos={localDevices}
        handleSwitchChange={handleSwitchChange}
      />
    </>
  );
}
