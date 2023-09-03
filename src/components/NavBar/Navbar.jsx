import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const getButtonStyle = (path) => {
    if (location.pathname === path) {
      return {
        borderColor: "#EBB73E",
      };
    } else {
      return {
        borderColor: "#ffffff",
      };
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        mt: "-30px",
        zIndex: 2,
        position: "relative",
        mb: "80px",
      }}
    >
      <Link to="/home">
        <Button
          variant="outlined"
          size="large"
          sx={{
            mx: 1.5,
            width: "150px",
            borderColor: "#ffffff",
            borderWidth: 3,
            borderRadius: 4,
            height: "55px",
            backgroundColor: "#DBDBDB",
            ...getButtonStyle("/home"),
            "&:hover": {
              opacity: 1,
              backgroundColor: "#DBDBDB",
            },
          }}
        >
          Home
        </Button>
      </Link>

      <Link to="/dispositivos">
        <Button
          variant="outlined"
          size="large"
          sx={{
            mx: 1.5,
            width: "150px",
            borderColor: "#ffffff",
            borderWidth: 3,
            borderRadius: 4,
            height: "55px",
            backgroundColor: "#DBDBDB",
            ...getButtonStyle("/dispositivos"),
            "&:hover": {
              opacity: 1,
              backgroundColor: "#DBDBDB",
            },
          }}
        >
          Dispositivos
        </Button>
      </Link>

      <Link to="/#">
        <Button
          variant="outlined"
          size="large"
          sx={{
            mx: 1.5,
            width: "150px",
            borderColor: "#ffffff",
            borderWidth: 3,
            borderRadius: 4,
            height: "55px",
            backgroundColor: "#DBDBDB",
            ...getButtonStyle("/#"),
            "&:hover": {
              opacity: 1,
              backgroundColor: "#DBDBDB",
            },
          }}
        >
          Informes
        </Button>
      </Link>

      <Link to="/ecotips">
        <Button
          variant="outlined"
          size="large"
          sx={{
            mx: 1.5,
            width: "150px",
            borderColor: "#ffffff",
            borderWidth: 3,
            borderRadius: 4,
            height: "55px",
            backgroundColor: "#DBDBDB",
            ...getButtonStyle("/ecotips"),
            "&:hover": {
              opacity: 1,
              backgroundColor: "#DBDBDB",
            },
          }}
        >
          Eco-Tips
        </Button>
      </Link>
    </Box>
  );
}
