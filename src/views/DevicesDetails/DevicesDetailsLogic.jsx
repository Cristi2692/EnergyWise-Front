import { useDevicesContext } from "../../context/DevicesContext";
import DevicesDetails from "./DevicesDetails";
import { useState } from "react";
import { useParams } from "react-router-dom";

function DevicesDetailsLogic() {
  const { deleteDevice } = useDevicesContext();
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();

  const handleDelete = () => {
    deleteDevice(id);
  };

  return (
    <DevicesDetails
      openModal={openModal}
      handleOpenModal={() => setOpenModal(true)}
      handleCloseModal={() => setOpenModal(false)}
      handleDelete={handleDelete}
    />
  );
}

export default DevicesDetailsLogic;
