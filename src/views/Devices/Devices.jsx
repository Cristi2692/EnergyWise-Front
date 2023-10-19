import { Box, Fab, Typography } from "@mui/material";
import SlidersDummy from "../../components/Sliders/SlidersDummy";
import AddIcon from "@mui/icons-material/Add";
import AddDeviceModal from "../../components/AddDeviceModal/AddDeviceModal";
import { useState } from "react";

export default function Devices() {
  const [modalOpen, setModalOpen] = useState(false);
  // const [alertMessage, setAlertMessage] = useState("");

  const handleSuccess = () => {
    // setAlertMessage(message);
    setModalOpen(false);
    // setTimeout(() => {
    //   setAlertMessage("");
    // }, 4000);
  };
  return (
    <>
      <Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          mt={2}
          mb={6}
          padding={1}
          bgcolor="rgba(0, 0, 0, 0.1)"
          borderRadius="20px"
          boxShadow={2}
          onClick={() => setModalOpen(true)}
          mx="auto"
          width="210px"
          sx={{ cursor: "pointer" }}
        >
          <Fab color="primary" aria-label="add" size="small">
            <AddIcon />
          </Fab>
          <Typography variant="body1" color="text.secondary" ml={2}>
            Añadir dispositivo
          </Typography>
        </Box>

        {/* {alertMessage && (
          <Box
            sx={{
              bgcolor: "rgba(0, 255, 0, 0.1)", // Fondo ligeramente verde
              color: "green", // Color de texto verde
              borderRadius: "8px", // Bordes redondeados a 8px
              p: 1, // Padding alrededor del texto
              textAlign: "center", // Texto centrado
              width: "fit-content", // Ancho según el contenido
              mx: "auto", // Centrar la caja en el eje X
              my: 2, // Margen vertical
              boxShadow: "0px 0px 8px rgba(0, 255, 0, 0.5)", // Sombra ligeramente verde
            }}
          >
            {alertMessage}
          </Box>
        )} */}

        <AddDeviceModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSuccess={handleSuccess}
        />
      </Box>
      <SlidersDummy />
    </>
  );
}
