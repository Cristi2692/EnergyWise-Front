import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function PublicRoute() {
  const { user } = useAuthContext();

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
