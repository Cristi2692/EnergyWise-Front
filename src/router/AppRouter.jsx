import { Route, Routes } from "react-router-dom";

import PublicRoute from "../router/PublicRoute";
import PrivateRoute from "../router/PrivateRoute";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import Home from "../views/Home/Home";
import Layout from "../components/Layout/Layout";
import Devices from "../views/Devices/Devices";

import ModifyData from "../views/ModifyData/ModifyData";
import Analytics from "../views/Analytics/Analytics";
import Landing from "../views/Landing/Landing";
import DevicesDetails from "../views/DevicesDetails/DevicesDetailsLogic";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="home" index element={<Home />} />

            <Route path="dispositivos">
              <Route index element={<Devices />} />
              <Route path="config/:id" element={<DevicesDetails />} />
            </Route>

            <Route path="analisis" element={<Analytics />} />
            <Route path="perfil" element={<ModifyData />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
