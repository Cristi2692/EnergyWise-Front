import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import { initialValues } from "./Utils/form";
import { validationSchema } from "./RegisterSchema";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StyledLink } from "../../components/ui/StyledLink";

const defaultTheme = createTheme();

export default function RegisterView({ handleSubmit }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
            Registro
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Nombre"
                      helperText={touched.name ? errors.name : ""}
                      error={touched.name && Boolean(errors.name)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      required
                      fullWidth
                      id="surname"
                      label="Apellido"
                      name="surname"
                      autoComplete="off"
                      helperText={touched.surname ? errors.surname : ""}
                      error={touched.surname && Boolean(errors.surname)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="off"
                      helperText={touched.email ? errors.email : ""}
                      error={touched.email && Boolean(errors.email)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
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
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirma tu contraseña"
                      type="password"
                      id="confirmPassword"
                      autoComplete="off"
                      helperText={
                        touched.confirmPassword ? errors.confirmPassword : ""
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
                          required
                          name="acceptTerms"
                          color="primary"
                        />
                      }
                      label="Acepto los términos y condiciones legales."
                    />
                    {errors.acceptTerms && (
                      <div style={{ color: "red" }}>{errors.acceptTerms}</div>
                    )}
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  Crear cuenta
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <StyledLink to="/">
                      ¿Ya tienes cuenta? Inicia sesión
                    </StyledLink>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
