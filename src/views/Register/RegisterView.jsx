import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import { initialValues } from "./Utils/form";
import { validationSchema } from "./RegisterSchema";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StyledLink } from "../../components/ui/StyledLink";
import backgroundImage from "../../assets/img-login/pcc.png";
import logo from "../../assets/logotipo.png";
import { useState } from "react";

const defaultTheme = createTheme();

export default function RegisterView({ handleSubmit }) {
  const [submitClicked, setSubmitClicked] = useState(false);
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
                "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4))", //
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
                style={{ width: "160px", height: "auto", marginBottom: "15px" }}
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
                Regístrate
              </Typography>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  setSubmitClicked(true);
                  handleSubmit(values, actions);
                }}
              >
                {({
                  isSubmitting,
                  errors,
                  touched,
                  handleChange: formikHandleChange,
                  setFieldTouched,
                }) => (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            color: "#000",
                            borderRadius: "5px",
                          }}
                          autoComplete="given-name"
                          name="name"
                          required
                          fullWidth
                          id="name"
                          label="Nombre"
                          onChange={(e) => {
                            formikHandleChange(e);
                            setFieldTouched("name", false, false);
                          }}
                          helperText={touched.name ? errors.name : ""}
                          error={touched.name && Boolean(errors.name)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          component={TextField}
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            color: "#000",
                            borderRadius: "5px",
                          }}
                          required
                          fullWidth
                          id="surname"
                          label="Apellido"
                          name="surname"
                          autoComplete="off"
                          onChange={(e) => {
                            formikHandleChange(e);
                            setFieldTouched("surname", false, false);
                          }}
                          helperText={touched.surname ? errors.surname : ""}
                          error={touched.surname && Boolean(errors.surname)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          component={TextField}
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            color: "#000",
                            borderRadius: "5px",
                          }}
                          required
                          fullWidth
                          id="email"
                          label="Email"
                          name="email"
                          autoComplete="off"
                          onChange={(e) => {
                            formikHandleChange(e);
                            setFieldTouched("email", false, false);
                          }}
                          helperText={touched.email ? errors.email : ""}
                          error={touched.email && Boolean(errors.email)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          component={TextField}
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            color: "#000",
                            borderRadius: "5px",
                          }}
                          required
                          fullWidth
                          name="password"
                          label="Contraseña"
                          type="password"
                          id="password"
                          autoComplete="off"
                          onChange={(e) => {
                            formikHandleChange(e);
                            setFieldTouched("password", false, false);
                          }}
                          helperText={touched.password ? errors.password : ""}
                          error={touched.password && Boolean(errors.password)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          component={TextField}
                          sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            color: "#000",
                            borderRadius: "5px",
                          }}
                          required
                          fullWidth
                          name="confirmPassword"
                          label="Confirma tu contraseña"
                          type="password"
                          id="confirmPassword"
                          autoComplete="off"
                          onChange={(e) => {
                            formikHandleChange(e);
                            setFieldTouched("confirmPassword", false, false);
                          }}
                          helperText={
                            touched.confirmPassword
                              ? errors.confirmPassword
                              : ""
                          }
                          error={
                            touched.confirmPassword &&
                            Boolean(errors.confirmPassword)
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Field
                              type="checkbox"
                              as={Checkbox}
                              style={{ color: "#006775" }}
                              required
                              name="acceptTerms"
                              color="primary"
                            />
                          }
                          label="Acepto los términos y condiciones legales."
                        />
                        {submitClicked && errors.acceptTerms && (
                          <div style={{ color: "red" }}>
                            {errors.acceptTerms}
                          </div>
                        )}
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        backgroundColor: "#006775",
                        color: "#FFF",
                        fontFamily: "Josefin Sans",
                      }}
                      disabled={isSubmitting}
                    >
                      Crear cuenta
                    </Button>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <StyledLink to="/login">
                          ¿Ya tienes cuenta? Inicia sesión
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
