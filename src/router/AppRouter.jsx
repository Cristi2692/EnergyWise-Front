import { Route, Routes } from "react-router-dom";

import PublicRoute from "../router/PublicRoute";
import PrivateRoute from "../router/PrivateRoute";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import Home from "../views/Home/Home";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
