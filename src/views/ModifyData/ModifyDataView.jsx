import { Button, Stack, TextField, Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { deepPurple } from "@mui/material/colors";

export default function ModifyDataView({
  isEditable,
  userData,
  handleEdit,
  handleSave,
  handleChange,
}) {
  console.log("Dataview", userData);
  return (
    <>
      <Stack direction="row" spacing={2} mt={15} mb={5} mx={52}>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
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
          sx={{ width: "25%" }}
          label="Nombre"
          variant="outlined"
          fullWidth
          name="name"
          value={userData.name}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <TextField
          sx={{ width: "25%" }}
          label="Apellido"
          variant="outlined"
          fullWidth
          name="surname"
          value={userData.surname}
          onChange={handleChange}
          disabled={!isEditable}
        />
        <TextField
          sx={{ width: "25%" }}
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
            style={{ marginTop: "16px", marginBottom: "16px", width: "10%" }}
          >
            Guardar
          </Button>
        ) : (
          <Button
            style={{ marginTop: "16px", marginBottom: "16px", width: "10%" }}
            fullWidth
            startIcon={<EditIcon />}
            variant="outlined"
            color="primary"
            onClick={handleEdit}
          >
            Editar
          </Button>
        )}
      </Stack>
    </>
  );
}
