import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

export default function PublicRoute() {
  const { user } = useAuthContext();

  // Si está cargando muestra el spinner.
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

  // Si el usuario ya está autenticado navega al home
  if (user) {
    return <Navigate to="/home" />;
  }

  // Si no está cargando y el usuario no está autenticado muestra la ruta pública (login).
  return (
    <div>
      <Outlet />
    </div>
  );
}
