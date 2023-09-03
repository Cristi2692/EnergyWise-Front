import { Route, Routes } from "react-router-dom";

import PublicRoute from "../router/PublicRoute";
import PrivateRoute from "../router/PrivateRoute";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import Home from "../views/Home/Home";
import Layout from "../components/Layout/Layout";
import Devices from "../views/Devices/Devices";
import EcoTips from "../views/EcoTips/EcoTips";
import ProfileView from "../views/Profile/ProfileView";
import ModifyData from "../views/ModifyData/ModifyData";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="home" index element={<Home />} />
            <Route path="/dispositivos" element={<Devices />} />
            <Route path="/ecotips" element={<EcoTips />} />
            <Route path="/perfil" element={<ProfileView />} />
            <Route path="/misdatos" element={<ModifyData />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
