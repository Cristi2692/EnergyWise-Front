import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function PrivateRoute() {
  const { user } = useAuthContext();

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
