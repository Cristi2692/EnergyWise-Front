import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Fab,
} from "@mui/material";
import { typeScale } from "../../themeFonts";
import Switch from "../Switch/Switch";
import AddIcon from "@mui/icons-material/Add";

export default function TableView({ dispositivos, onAddDeviceClick }) {
  const hasDevices = dispositivos && dispositivos.length > 0;

  return hasDevices ? (
    <Box
      px={5}
      sx={{
        width: "100%",
        maxWidth: "300px",
        margin: "0 auto",
        mt: 16,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          width: "310px",
          height: "50px",
          backgroundColor: (theme) => theme.palette.primary.main,
          color: "#ffffff",
          borderRadius: "15px 15px 0 0",
          boxShadow: "-5px 0px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        DISPOSITIVOS
      </Typography>
      <Box
        sx={{
          width: "310px",
          backgroundColor: "#ffffff",
          borderRadius: "0px 0px 15px 15px",
          boxShadow: "-5px 0px 6px rgba(0, 0, 0, 0.1)",
          overflowY: "auto",
          minHeight: "66.6vh",
          maxHeight: "66.5vh",
        }}
      >
        <Table>
          <TableBody>
            {dispositivos.map((dispositivo) => (
              <TableRow key={dispositivo.id}>
                <TableCell
                  sx={{
                    fontSize: typeScale.typography.body1bold.fontSize,
                    paddingLeft: "30px",
                    textTransform: "uppercase",
                  }}
                >
                  {dispositivo.tag}
                </TableCell>
                <TableCell
                  sx={{
                    width: "5px",
                  }}
                >
                  <Switch
                    width="23px"
                    height="23px"
                    isActive={
                      dispositivo.state === "1" || dispositivo.state === 1
                    }
                    idDevice={dispositivo.id}
                    idDevModel={dispositivo.idDevModel}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  ) : (
    <Paper
      elevation={3}
      sx={{
        marginLeft: 5,
        padding: 3,
        mt: 14.5,
        width: "290px",
        height: "65vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "15px",
        bgcolor: "rgba(0, 0, 0, 0.03)",
      }}
    >
      <Box
        display="flex"
        // flexDirection="row"
        alignItems="center"
        justifyContent="center"
        padding={1}
        bgcolor="rgba(0, 0, 0, 0.1)"
        borderRadius="20px"
        boxShadow={2}
        cursor="pointer"
        // onClick={...}
        mt={7}
        mx="auto"
        width="190px"
        height="50px"
        onClick={onAddDeviceClick}
      >
        <Fab color="primary" aria-label="add" size="small">
          <AddIcon />
        </Fab>
        <Typography variant="body1" color="text.secondary" ml={2}>
          Añadir dispositivo
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" mt={10}>
        ¡Aquí verás tus dispositivos!
      </Typography>
    </Paper>
  );
}
