import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const theme = useTheme();
  const location = useLocation();

  const buttonData = [
    { path: "/dispositivos", label: "Dispositivos" },
    { path: "/home", label: "Home" },
    { path: "/analisis", label: "Analítica" },
    // { path: "/ecotips", label: "Eco-Tips" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "0 auto",
        zIndex: 2,
        position: "relative",
        mb: "80px",
        width: "80%",
        alignItems: "center",
        gap: {
          xs: "10px",
          md: "2.5%",
        },
        flexDirection: {
          xs: "column",
          md: "row",
        },

        mt: {
          xs: "10px",
          md: "-92px",
        },
      }}
    >
      {buttonData.map((button) => (
        <Link to={button.path} key={button.path}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              mx: 1.5,
              width: "160px",
              borderWidth: 2,
              borderRadius: 4,
              height: "52px",
              color:
                location.pathname === button.path
                  ? theme.palette.primary.contrastText
                  : theme.palette.primary.dark,
              borderColor: theme.palette.primary.main,
              backgroundColor:
                location.pathname === button.path
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main,
              boxShadow: {
                xs:
                  location.pathname === button.path
                    ? "0px 4px 6px rgba(0, 0, 0, 0.1)"
                    : "none",
                md:
                  location.pathname === button.path
                    ? `0px 4px 6px rgba(0, 0, 0, 0.1), 0px 0px 0px 15px ${theme.palette.secondary.main}`
                    : "none",
              },
              transition: "transform 0.35s ease-in-out",
              transform: {
                xs: "none",
                md:
                  location.pathname === button.path
                    ? "translateY(50px)"
                    : "translateY(17px)",
              },

              "&:hover": {
                opacity: 1,
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
              },
            }}
          >
            {button.label}
          </Button>
        </Link>
      ))}
    </Box>
  );
}
