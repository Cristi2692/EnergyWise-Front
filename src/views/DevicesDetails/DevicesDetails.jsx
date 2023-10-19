import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDevicesContext } from "../../context/DevicesContext";
import { Calendar } from "../../components/Calendar/Alt/Calendar";
import { Box, Typography, Button, Modal, Stack } from "@mui/material";

export default function DevicesDetails({
  openModal,
  handleOpenModal,
  handleCloseModal,
  handleDelete,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "49.5%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
  };

  //Obtengo id de params
  const { id } = useParams();
  const {
    getDeviceById,
    devices,
    getDeviceConfiguration,
    saveDeviceConfiguration,
  } = useDevicesContext(); // nueva funcion para traer dispositivo con id X
  const [device, setDevice] = useState(null);
  const [deviceConfiguration, setDeviceConfiguration] = useState(null);
  const [isLoadingDeviceConfiguration, setIsLoadingDeviceConfiguration] =
    useState(true);

  useEffect(() => {
    const foundDevice = getDeviceById(id);
    setDevice(foundDevice);
  }, [id, getDeviceById, devices, deviceConfiguration, getDeviceConfiguration]);

  useEffect(() => {
    // Verifico si el dispositivo existe y si la configuración aún no se ha cargado.
    if (device && deviceConfiguration === null) {
      setIsLoadingDeviceConfiguration(true);
      getDeviceConfiguration(device).then((deviceConfiguration) => {
        console.log("config", deviceConfiguration);
        setDeviceConfiguration(deviceConfiguration);
        setIsLoadingDeviceConfiguration(false);
      });
    }
  }, [device, deviceConfiguration]);

  // Guardar los cambios en la configuración.
  const onSaveChanges = () => {
    console.log("Guardando estos events", deviceConfiguration);
    saveDeviceConfiguration(device, deviceConfiguration);
  };

  if (!device && isLoadingDeviceConfiguration) return <div>Cargando...</div>;

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
      >
        <Box display="flex" alignItems="center">
          <Typography
            variant="h3"
            sx={{
              width: "300px",
              borderRadius: "5px",
              textAlign: "start",
              color: "#006775",
              padding: "8px",
              marginLeft: 12,
            }}
          >
            {device.tag}
          </Typography>
        </Box>
        <Button
          sx={{
            marginRight: 12.5,
            backgroundColor: "#006775",
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#00555E",
            },
            "&:active": {
              backgroundColor: "#00454E",
            },
          }}
          onClick={onSaveChanges}
        >
          Guardar cambios
        </Button>
      </Box>
      <Box sx={{ marginTop: "-70px" }}>
        {deviceConfiguration != null ? (
          <Calendar
            events={deviceConfiguration}
            onEventsChange={(eventsFromCalendar) =>
              setDeviceConfiguration(eventsFromCalendar)
            }
          />
        ) : null}
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          sx={{
            marginBottom: 8,
            marginTop: -3,
            backgroundColor: "#F05A39",
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: "600",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#00555E",
            },
            "&:active": {
              backgroundColor: "#00454E",
            },
          }}
          onClick={handleOpenModal}
        >
          Eliminar dispositivo
        </Button>
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            ¿Seguro que quieres eliminar el dispositivo?
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
            <Button
              variant="outlined"
              color="success"
              onClick={handleCloseModal}
            >
              Cancelar
            </Button>
            <Button variant="outlined" color="error" onClick={handleDelete}>
              Eliminar
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}
