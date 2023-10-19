import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/system";
import logo from "../../assets/logotipo.png";

export default function HeaderView({
  menu,
  handleMenu,
  handleClose,
  handleLogout,
}) {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{
        zIndex: 1,
        backgroundColor: theme.palette.primary.contrastText,
        paddingY: 1.3,
        borderRadius: 6,
        marginTop: 1,
        width: "98%",
        marginX: "auto",
        boxShadow: "none",
        height: "100px",
      }}
    >
      <Container maxWidth={false} sx={{ width: "97%" }}>
        <Toolbar disableGutters sx={{ padding: "0 10px" }}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "74px", width: "auto" }}
          />
          <Box sx={{ flexGrow: 1 }} />{" "}
          <Box sx={{ flexGrow: 0 }}>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="primary"
              >
                <AccountCircle sx={{ fontSize: "3rem" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                menu={menu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(menu)}
                onClose={handleClose}
              >
                <Link
                  to="/perfil"
                  onClick={handleClose}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem>Perfil</MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
