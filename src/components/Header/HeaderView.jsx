import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
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
        paddingY: 1,
        borderRadius: 7,
        marginTop: 2,
        width: "97%",
        marginX: "auto",
      }}
    >
      <Container maxWidth="xl" sx={{ width: "97%" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ height: "58px", width: "auto" }}
            />
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ height: "58px", width: "auto" }}
            />
          </Typography>
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
                <AccountCircle sx={{ fontSize: "2.5rem" }} />
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
