import {
  Box,
  Button,
  Typography,
  Modal,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Paper,
  IconButton,
} from "@mui/material";
import HighlightOff from "@mui/icons-material/HighlightOff";
import { useTheme } from "@mui/material/styles";

function AddDeviceModalView({
  isOpen,
  onClose,
  setTipo,
  tipo,
  marca,
  setMarca,
  modelo,
  setModelo,
  nombre,
  setNombre,
  filteredBrands,
  filteredModels,
  deviceTypes,
  handleClose,
  handleAdd,
  successMessage,
  errorMessage,
  isMarcaEnabled,
  isModeloEnabled,
}) {
  const theme = useTheme();

  const selectStyles = {
    "& .MuiFilledInput-underline:before": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover .MuiFilledInput-underline:before": {
      borderColor: theme.palette.primary.main,
    },
    "& .Mui-focused .MuiFilledInput-underline:before": {
      borderColor: theme.palette.primary.main,
    },
    "& .MuiSelect-icon": {
      color: theme.palette.primary.main,
    },
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            left: "49.93%",
            transform: "translate(-51.7%, -43%)",
            width: 400,
            height: 560,
            bgcolor: "background.paper",
            border: `2px solid ${theme.palette.primary.dark}`,
            borderRadius: "25px",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={handleClose}
          >
            <HighlightOff
              sx={{ fontSize: "2rem", color: theme.palette.error.main }}
            />
          </IconButton>

          <Paper
            sx={{
              // backgroundColor: theme.palette.primary.main,
              padding: 1,
              // width: "200px",
              borderRadius: "5px",
              // border: `1.5px solid ${theme.palette.secondary.dark}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 3,
            }}
            elevation={0}
          >
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              color={theme.palette.primary.main}
            >
              Nuevo dispositivo
            </Typography>
          </Paper>

          <FormControl
            margin="normal"
            sx={{ ...selectStyles, width: "80%", mt: 7 }}
          >
            <TextField
              id="nombre-dispositivo"
              autoComplete="off"
              value={nombre}
              onChange={setNombre}
              placeholder="Nombre dispositivo, ej: Luz salón"
              required
            />
          </FormControl>

          <FormControl margin="normal" sx={{ ...selectStyles, width: "80%" }}>
            <InputLabel id="tipo-label">Tipo</InputLabel>
            <Select
              labelId="tipo-label"
              id="tipo-select"
              value={tipo}
              label="Tipo"
              onChange={setTipo}
            >
              {deviceTypes.map((type, index) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl margin="normal" sx={{ ...selectStyles, width: "80%" }}>
            <InputLabel id="marca-label">Marca</InputLabel>
            <Select
              labelId="marca-label"
              disabled={!isMarcaEnabled}
              id="marca-select"
              value={marca}
              label="Marca"
              onChange={setMarca}
            >
              {filteredBrands.map((brand, index) => (
                <MenuItem key={index} value={brand}>
                  {brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl margin="normal" sx={{ ...selectStyles, width: "80%" }}>
            <InputLabel id="modelo-label">Modelo</InputLabel>
            <Select
              labelId="modelo-label"
              disabled={!isModeloEnabled}
              id="modelo-select"
              value={modelo}
              label="Modelo"
              onChange={setModelo}
            >
              {filteredModels.map((model, index) => (
                <MenuItem key={index} value={model}>
                  {model}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box my={2}>
            <Button
              onClick={handleAdd}
              sx={{
                color: theme.palette.primary.main,
                border: `1.5px solid ${theme.palette.success.main}`,
                fontWeight: "650",
                bgcolor: "#00b0980f",
                width: "130px",
                mt: 2.5,
                "&:hover": {
                  bgcolor: "#00b09872",
                },
              }}
            >
              Añadir
            </Button>
          </Box>
          <Box style={{ minHeight: "30px" }}>
            {successMessage && (
              <p
                style={{
                  color: theme.palette.success.main,
                  textAlign: "center",
                }}
              >
                El dispositivo se ha añadido con éxito!
              </p>
            )}
            {errorMessage && (
              <p
                style={{ color: theme.palette.error.main, textAlign: "center" }}
              >
                {errorMessage}
              </p>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AddDeviceModalView;
