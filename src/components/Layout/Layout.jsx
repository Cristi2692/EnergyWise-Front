import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/FooterView";
import { Box } from "@mui/system";

export default function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Navbar />
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
