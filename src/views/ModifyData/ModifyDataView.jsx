import {
  Button,
  Stack,
  TextField,
  Avatar,
  Paper,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function ModifyDataView({
  isEditable,
  userData,
  handleEdit,
  handleSave,
  handleChange,
  getInitials,
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

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "24px",
        maxWidth: "450px",
        height: "500px",
        margin: "0 auto",
        mb: 9,
        mt: 4,
        borderRadius: "15px",
      }}
    >
      <Stack direction="column" alignItems="center" spacing={2} mt={2} mb={8}>
        <Avatar sx={{ bgcolor: "#006775", padding: "8px" }}>
          {getInitials()}
        </Avatar>
      </Stack>

      <Stack
        spacing={3}
        mb={19}
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          sx={{ width: "70%" }}
          label="Nombre"
          variant="outlined"
          fullWidth
          name="name"
          value={userData.name}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <TextField
          sx={{ width: "70%" }}
          label="Apellido"
          variant="outlined"
          fullWidth
          name="surname"
          value={userData.surname}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <TextField
          sx={{ width: "70%" }}
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          value={userData.email}
          onChange={handleChange}
          disabled={!isEditable}
        />
        {isEditable ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            style={{ marginTop: "16px", marginBottom: "16px", width: "35%" }}
          >
            Guardar
          </Button>
        ) : (
          <>
            <Button
              style={{ marginTop: "40px", marginBottom: "16px", width: "35%" }}
              fullWidth
              startIcon={<EditIcon />}
              variant="outlined"
              color="primary"
              onClick={handleEdit}
            >
              Editar
            </Button>
            <Typography
              variant="body2"
              component="span"
              sx={{ cursor: "pointer", color: "error.main", mt: 2 }}
              onClick={handleOpenModal}
            >
              Eliminar mi cuenta
            </Typography>
          </>
        )}
      </Stack>

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
            ¿Seguro que quieres eliminar tu cuenta?
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
    </Paper>
  );
}
