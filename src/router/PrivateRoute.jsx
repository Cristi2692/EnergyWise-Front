import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
// import Box from "@mui/material/Box";
// import CircularProgress from "@mui/material/CircularProgress";

export default function PrivateRoute() {
  const { user } = useAuthContext();

  // Mientras se está cargando la información muestra el spinner.
  // if (isLoading) {
  //   return (
  //     <Box
  //       sx={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  // Si el usuario no está autenticado redirige al inicio de sesión.
  if (!user) {
    return <Navigate to="/" />;
  }

  // Si el usuario está autenticado redirige al home
  return (
    <div>
      <Outlet />
    </div>
  );
}
