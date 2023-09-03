import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
// import grafico from "../../assets/imgHome/grafico.jpg";
import Switch from "../../components/Switch/Switch";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Select,
  MenuItem,
} from "@mui/material";
import Chart from "../../components/Chart/Chart";

export default function HomeView() {
  const [entorno, setEntorno] = useState("casa"); // Valor inicial

  const [dispositivos, setDispositivos] = useState([
    { id: 1, nombre: "Motor Piscina", estado: false },
    { id: 2, nombre: "Luz salón", estado: false },
    { id: 3, nombre: "Batería", estado: false },
    { id: 4, nombre: "Coche", estado: false },
    { id: 5, nombre: "Lavadora", estado: false },
    { id: 6, nombre: "Lámpara cuarto", estado: false },
  ]);

  const handleSwitchChange = (id) => {
    setDispositivos((prevDispositivos) =>
      prevDispositivos.map((d) =>
        d.id === id ? { ...d, estado: !d.estado } : d
      )
    );
  };

  return (
    <>
      <Grid container spacing={3}>
        {/* Grid para la tabla y el selector */}
        <Grid item xs={3} container justifyContent="center">
          <Box px={8}>
            <Select
              value={entorno}
              onChange={(event) => setEntorno(event.target.value)}
              sx={{
                textAlign: "center",
                width: "300px",
                height: "50px",
                backgroundColor: "#00525D",
                color: "#ffffff",
                border: "1px solid #ffffff",
                borderRadius: "15px",
                boxShadow: "-5px 0px 6px rgba(0, 0, 0, 0.1)",
                "& .MuiSelect-icon": {
                  color: "#E9B91A",
                },
              }}
            >
              <MenuItem value="casa">Casa</MenuItem>
              <MenuItem value="oficina">Oficina</MenuItem>
              <MenuItem value="nave">Nave</MenuItem>
            </Select>

            <Table
              sx={{
                width: "300px",
                marginTop: "4px",
                backgroundColor: "#f5f5f5",
                borderRadius: "15px",
                boxShadow: "-5px 0px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <TableBody>
                {dispositivos.map((dispositivo) => (
                  <TableRow key={dispositivo.id}>
                    <TableCell>{dispositivo.nombre}</TableCell>
                    <TableCell sx={{ width: "5px" }}>
                      <Switch
                        checked={dispositivo.estado}
                        onChange={() => handleSwitchChange(dispositivo.id)}
                        name={dispositivo.nombre}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Grid>

        {/* Grid para la imagen */}
        <Grid item xs={9}>
          <Box
            sx={{
              backgroundColor: "#F5F5F5",
              display: "inline-block",
              borderRadius: "15px",
              boxShadow: "-4px 0px 6px rgba(0, 0, 0, 0.1)",
              padding: "30px",
              marginBottom: "100px",
              // marginRight: "10px",
            }}
          >
            <Box>
              {/* <img
                src={grafico}
                alt="Gráfico consumos"
                style={{
                  width: "70%",
                  height: "auto",
                  maxHeight: "100vh",
                }}
              /> */}
              <Chart />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
