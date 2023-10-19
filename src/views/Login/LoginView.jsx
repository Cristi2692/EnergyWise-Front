import { Formik, Field, Form } from "formik";
import { TextField, CheckboxWithLabel } from "formik-material-ui";
import { StyledLink } from "../../components/ui/StyledLink";
import { validationSchema } from "./LoginSchema";
import { initialValues } from "./utils/form";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../assets/logotipo.png";
import backgroundImage from "../../assets/img-login/pcc.png";

const defaultTheme = createTheme();

export default function LoginView({ handleChange, handleSubmit }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container style={{ minHeight: "100vh" }}>
        {/* Grid para la Imagen */}
        <Grid item xs={7.5} style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          />
          {/* Div para el gradiente */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombras en el primer Grid
              zIndex: 1, // Asegura que este Grid esté detrás del segundo
              background:
                "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4))",
            }}
          />
        </Grid>

        {/* Grid para el Formulario de Login */}
        <Grid
          item
          xs={4.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            zIndex: 2,
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Container component="main" sx={{ width: "380px", mr: "90px" }}>
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgb(255, 255, 255, 0)",
                borderRadius: 4,
                // padding: 1,
                mr: "-20px",
                mt: "-25px",
                ml: "-20px",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ width: "160px", height: "auto", marginBottom: "30px" }}
              />
              <Typography
                component="h1"
                variant="h5"
                fontFamily="Gayathri"
                sx={{
                  mt: 3,
                  color: "#006775",
                  padding: "0.5rem 1rem",
                }}
              >
                Inicia sesión
              </Typography>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  isSubmitting,
                  errors,
                  touched,
                  handleChange: formikHandleChange,
                  setFieldTouched,
                }) => (
                  <Form>
                    <Field
                      component={TextField}
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        color: "#000",
                        borderRadius: "5px",
                      }}
                      onChange={(e) => {
                        handleChange(e); //handleChange de Login
                        formikHandleChange(e); //handleChange de Formik
                        setFieldTouched("email", false, false);
                      }}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="off"
                      helperText={touched.email ? errors.email : ""}
                      error={touched.email && Boolean(errors.email)}
                      fontFamily="Acme"
                    />
                    <Field
                      component={TextField}
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        color: "#000",
                        borderRadius: "5px",
                      }}
                      onChange={(e) => {
                        handleChange(e); //handleChange de Login
                        formikHandleChange(e); //handleChange de Formik
                        setFieldTouched("password", false, false);
                      }}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Contraseña"
                      type="password"
                      id="password"
                      autoComplete="off"
                      helperText={touched.password ? errors.password : ""}
                      error={touched.password && Boolean(errors.password)}
                    />
                    <Field
                      sx={{ mb: 1 }}
                      component={CheckboxWithLabel}
                      style={{ color: "#006775" }}
                      type="checkbox"
                      name="remember"
                      Label={{ label: "Recuérdame" }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        sx={{
                          mt: 3,
                          mb: 3,
                          height: "50px",
                          borderRadius: "20px",
                          backgroundColor: "#006775",
                          color: "#FFF",
                          fontFamily: "Josefin Sans",
                          letterSpacing: "0.5px",
                        }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isSubmitting}
                      >
                        Entrar
                      </Button>
                    </Box>
                    <Grid container>
                      <Grid item xs>
                        <StyledLink to="#">
                          ¿Has olvidado tu contraseña?
                        </StyledLink>
                      </Grid>
                      <Grid item>
                        <StyledLink to="/register">
                          ¿Eres nuevo? Regístrate
                        </StyledLink>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
