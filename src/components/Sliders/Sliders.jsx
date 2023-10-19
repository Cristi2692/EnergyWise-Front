import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Button, CardActionArea, Paper } from "@mui/material";
import { Box, Grid } from "@mui/material";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
import Switch from "../Switch/Switch";
// import SavingsIcon from "@mui/icons-material/Savings";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

export default function Sliders({ dispositivos }) {
  const theme = useTheme();
  const hasDevices = dispositivos && dispositivos.length > 0;
  const consumosFicticios = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const consumosFormateados = consumosFicticios.map((consumo) => {
    return (
      consumo.toLocaleString("es-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) + " kWh"
    );
  });
  return hasDevices ? (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        mb={15}
        mt={5}
        mx="auto"
        width="95%"
      >
        <Grid container spacing={4}>
          {dispositivos.map((dispositivo, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box>
                <Card
                  sx={{
                    borderRadius: "15px",
                    width: "100%",
                  }}
                >
                  <CardActionArea>
                    <Grid container direction="column">
                      {/* Grid para la imagen */}
                      <Grid item>
                        <CardMedia
                          component="img"
                          height="325"
                          image={dispositivo.Device_model.images}
                          alt={dispositivo.name}
                          sx={{
                            opacity: 0.8,
                            padding: "12px 16px",
                            width: "calc(100% - 32px)",
                            filter: dispositivo.state
                              ? "none"
                              : "grayscale(100%)",
                            borderRadius: "20px",
                          }}
                        />
                      </Grid>

                      {/* Grid para el contenido debajo de la imagen */}
                      <Grid item container alignItems="center">
                        {/* Columna principal */}
                        <Grid item xs={7}>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {dispositivo.tag}{" "}
                              <Box ml={3} display="inline-block">
                                <Switch
                                  width="29px"
                                  height="29px"
                                  isActive={
                                    dispositivo.state === "1" ||
                                    dispositivo.state === 1
                                  }
                                  idDevice={dispositivo.id}
                                  idDevModel={dispositivo.idDevModel}
                                />
                              </Box>
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                              {dispositivo.name}
                            </Typography>
                            <Link to={`/dispositivos/config/${dispositivo.id}`}>
                              <Button
                                size="ms"
                                color="primary"
                                sx={{ mt: 3, ml: -1 }}
                                endIcon={<SettingsIcon />}
                              >
                                Configurar
                              </Button>
                            </Link>
                          </CardContent>
                        </Grid>
                        {/* Columna para la tarjetita a la derecha */}
                        <Grid item xs={5}>
                          <Paper
                            elevation={2}
                            sx={{
                              padding: 2,
                              mr: 2,
                              height: "80px",
                              borderRadius: "10px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              background: "#00b0980f",
                              color: "#333",
                              border: `2px solid #00B098`,
                            }}
                          >
                            {/* <SavingsIcon
                              style={{
                                fontSize: 26,
                                marginBottom: "18px",
                                color: "#00B098",
                              }}
                            />{" "}
                             Icono   */}
                            <Typography
                              variant="body2"
                              mt={-1.5}
                              mb={0.5}
                              gutterBottom
                            >
                              Consumo este mes:
                            </Typography>
                            <Typography
                              variant="h5"
                              style={{
                                color: theme.palette.primary.dark,
                                fontWeight: "bold",
                              }}
                            >
                              {consumosFormateados[index]}
                            </Typography>
                          </Paper>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  ) : (
    <>
      {/* <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent={"center"}
        mt={15}
        mb={8}
        // marginRight={12}
        padding={1}
        bgcolor="rgba(0, 0, 0, 0.1)"
        borderRadius="20px"
        boxShadow={2}
        cursor="pointer"
        // onClick={...}
        mx="auto"
        width="210px"
      >
        <Fab color="primary" aria-label="add" size="small">
          <AddIcon />
        </Fab>
        <Typography variant="body1" color="text.secondary" ml={2}>
          Añadir dispositivo
        </Typography>
      </Box> */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        mt={15}
        mb={30}
      >
        <Typography
          variant="h5bold"
          style={{ color: theme.palette.secondary.dark }}
        >
          ¡Empieza a añadir tus dispositivos!
        </Typography>
      </Box>
    </>
  );
}
