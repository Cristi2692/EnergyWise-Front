import { Formik, Field, Form } from "formik";
import { TextField, CheckboxWithLabel } from "formik-material-ui";
import { StyledLink } from "../../components/ui/StyledLink";
import { validationSchema } from "./LoginSchema";
import { initialValues } from "./utils/form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function LoginView({ handleChange, handleSubmit }) {
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
            }) => (
              <Form>
                <Field
                  component={TextField}
                  onChange={(e) => {
                    handleChange(e); //handleChange de Login
                    formikHandleChange(e); //handleChange de Formik
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
                />
                <Field
                  component={TextField}
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
                  type="checkbox"
                  name="remember"
                  Label={{ label: "Recuérdame" }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  Entrar
                </Button>
                <Grid container>
                  <Grid item xs>
                    <StyledLink to="#">¿Has olvidado tu contraseña?</StyledLink>
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
    </ThemeProvider>
  );
}
