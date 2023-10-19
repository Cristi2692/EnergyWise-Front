import { Link } from "react-router-dom";
import logo from "../../assets/logotipo.png";
import compu from "../../assets/img-landing/compu.png";
import video from "../../assets/img-landing/video.mp4";
import {
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import cardData from "./CardData";
import Footer from "../../components/Footer/FooterView";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <img src={logo} alt="Logo" style={{ height: "65px", width: "auto" }} />
        <Box>
          <Link to="/login">
            <Button
              variant="outlined"
              sx={{
                mr: 2,
                borderRadius: "15px",
                transition: "transform .2s", // Este es el tiempo que tardará en realizar la transformación.
                "&:hover": {
                  transform: "scale(1.1)", // Aquí se especifica el tamaño al que se transformará el botón.
                },
              }}
            >
              Inicia sesión
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="outlined"
              sx={{
                borderRadius: "15px",
                transition: "transform .2s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              Regístrate
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "90px",

          overflowX: "hidden",
        }}
      >
        {/* Box con gradient debajo del encabezado */}
        <Box
          sx={{
            width: "100%",
            height: "650px",
            background:
              "linear-gradient(180deg, #006775 0%, #00858a 50%, #00a39d 80%, #00c2b1 90%, #00c2b1 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 6.5rem",
            clipPath: "polygon(0 0, 29% 0, 97% 85%, 0 85%)",
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h2"
              component="h1"
              color="white"
              mt={5}
              mb={1}
              sx={{ fontFamily: "Josefin Sans" }}
            >
              Bienvenido a Energy Wise
            </Typography>
            <Typography
              variant="body1"
              component="p"
              color="#FFFFFF"
              sx={{
                fontSize: "1.13rem",
                fontFamily: "Gayathri",
                width: "900px",
                letterSpacing: "0.5px",
              }}
            >
              ¡Transforma tu mundo con Energy Wise! Explora un lugar donde la
              transparencia y el control te dan la libertad de decidir cómo y a
              qué precio consumes. Únete a nosotros, toma decisiones sabias y
              construye un futuro más verde y consciente. ¡Vive la experiencia y
              súmate a la revolución sostenible! 🌿💡
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: "-1.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <img
            src={compu}
            alt="pc"
            style={{ height: "600px", width: "auto" }}
          />
        </Box>

        {/* Cards */}
        <Box
          sx={{
            width: "100%",
            mt: -13,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingTop: "1rem",
            background:
              "linear-gradient(180deg, #00B2A7 0%, #71C9C3 50%, #FFFFFF 100%)",
          }}
        >
          {cardData.map((card, index) => (
            <Card
              key={index}
              sx={{
                background: `
                // linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0)), 
                linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.7)), 
                url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                width: "calc(20% - 0.5rem)",
                minHeight: "350px",
                // backgroundColor: "#ffffff",
                boxShadow: "0 4px 16px 0 rgba(0,0,0,0.1)",
                margin: "1rem",
                // mr: 7,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                // mt: 6,
                mb: 15,
                borderRadius: "8px",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                },
              }}
              data-aos="fade-right"
              // data-aos-delay="300"
              data-aos-duration="1000"
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  flexGrow: 1,
                  paddingBottom: "6rem",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Gayathri",
                    color: "#006775",
                    mb: 1,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontFamily: "Gayathri",
                    color: "#333",
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                <Link to="/login">
                  {" "}
                  <Button
                    size="small"
                    sx={{
                      width: "200px",
                      mb: 2,
                      backgroundColor: "#006775",
                      color: "#ffffff",
                      "&:hover": {
                        backgroundColor: "#0056b3",
                      },
                    }}
                  >
                    {card.action}
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: "600px",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",

            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      </Box>
      {/* Sección de Información  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "800px",
          padding: "1rem",
          background: "linear-gradient(#FFFFFF, #EDD0AA ,#daa054)",
        }}
      >
        <Link to="/register">
          <Button
            variant="contained"
            sx={{
              marginBottom: "50px", // Añadirá espacio entre el botón y el Box del contenido.
              backgroundColor: "#FCD53F",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            Únete a Energywise
          </Button>
        </Link>
        <Box
          sx={{
            width: "70%",
            marginBottom: "3rem",
            padding: "1rem",
            background: "#FFFFFF",
            borderRadius: "8px",
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 12px 24px 0 rgba(0,0,0,0.2)",
            },
          }}
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 3,
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                marginLeft={3}
                my={1}
                sx={{ fontFamily: "Gayathri" }}
              >
                ¿Cómo funciona Energy Wise?💡
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Gayathri" }}>
                <Box
                  sx={{
                    ul: {
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)", // Define tres columnas
                      gridTemplateRows: "repeat(2, 1fr)", // Define dos filas
                      gap: "20px", // Define el espacio entre los elementos
                      listStyleType: "none",
                      padding: 2,
                      li: {
                        marginBottom: "0.8rem",
                      },
                      "@media (max-width: 768px)": {
                        gridTemplateColumns: "1fr", // En pantallas pequeñas, cada elemento ocupará su propia fila.
                      },
                    },
                  }}
                >
                  <ul>
                    <li>
                      🌟 <b>¡Bienvenido a Bordo!</b>
                      <p>
                        Para comenzar, simplemente regístrate y empieza a añadir
                        tus dispositivos. Si no tienes ninguno aún, puedes
                        hacerlo desde la pestaña <b>Home</b>. Y si ya cuentas
                        con alguno, dirígete a la pestaña <b>Dispositivos</b>.
                      </p>
                    </li>

                    <li>
                      🏠 <b>Home: Tu Centro de Control</b>
                      <p>
                        En esta sección encontrarás un gráfico con los precios
                        del día y opciones rápidas para encender y apagar tus
                        dispositivos. ¡Optimiza tu consumo energético con un
                        solo clic!
                      </p>
                    </li>

                    <li>
                      🛠️ <b>Dispositivos: Tus Aliados del Día a Día</b>
                      <p>
                        Entra aquí para visualizar y gestionar todos tus
                        dispositivos. Puedes configurar y programar horarios de
                        funcionamiento de acuerdo con tus necesidades y
                        preferencias.
                      </p>
                    </li>

                    <li>
                      ⚙️ <b>Configuración: Programa tu Día</b>
                      <p>
                        Tu calendario de programación, aqui podrás gestionar tus
                        programaciones. En la ventana Home te proporcionamos
                        información sobre los precios del día que te ayudarán a
                        tomar decisiones inteligentes en la programación de tus
                        dispositivos.
                      </p>
                    </li>

                    <li>
                      📊 <b>Analítica: Conoce tus Hábitos</b>
                      <p>
                        Explora esta sección para obtener detalles precisos
                        sobre tu consumo eléctrico y el rendimiento de tus
                        dispositivos. Descubre tu ahorro, consumo, horas de
                        conexión, histórico de precios y mucho más. ¡Toma el
                        control y optimiza tu consumo de energía!
                      </p>
                    </li>
                  </ul>
                </Box>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
