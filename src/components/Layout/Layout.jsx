import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/FooterView";

export default function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
