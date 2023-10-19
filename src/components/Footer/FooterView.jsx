import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import logo from "../../assets/logotipo-blanco.png";
import insta from "../../assets/icons/insta.png";
import cascos from "../../assets/icons/cascos.png";
import sobre from "../../assets/icons/sobree.png";

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        p: 6,
        height: "100%",
      }}
      component="footer"
    >
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ height: "80px", width: "auto", marginLeft: "30px" }}
        />
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: -12,
          marginRight: 3,
        }}
      >
        <img src={insta} alt="logo" style={{ height: "30px", width: "auto" }} />
        <Typography
          variant="body3"
          align="center"
          sx={{
            alignSelf: "center",
            marginLeft: 2,
            color: "#ffffff",
            whiteSpace: "pre-line",
          }}
        >
          Conéctate y síguenos{"\n"} en todas nuestras redes{"\n"}para más
          contenido.
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 2,
          marginRight: 3,
        }}
      >
        <img src={sobre} alt="logo" style={{ height: "30px", width: "auto" }} />
        <Typography
          variant="body3"
          align="center"
          sx={{
            alignSelf: "center",
            marginLeft: 2,
            color: "#ffffff",
            whiteSpace: "pre-line",
          }}
        >
          Tu opinión importa{"\n"} envíanos tus sugerencias a{"\n"}
          contacto@energywise.com
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={cascos}
          alt="logo"
          style={{ height: "30px", width: "auto" }}
        />
        <Typography
          variant="body3"
          align="center"
          sx={{
            alignSelf: "center",
            marginLeft: 2,
            color: "#ffffff",
            whiteSpace: "pre-line",
          }}
        >
          Para soporte técnico,{"\n"} por favor, escríbenos a:{"\n"}
          soporte@energywise.com
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body3"
          align="center"
          sx={{
            alignSelf: "center",
            marginLeft: 5,
            color: "#ffffff",
            whiteSpace: "pre-line",
          }}
        >
          © 2023 EnergyWise. <br />
          Todos los derechos reservados. <br />
          Dirección: Av de Sor Teresa Prat 15, <br /> Málaga, 29003 <br />
          Teléfono: 600000000 <br />
          Email: contacto@energywise.com <br />
        </Typography>
      </Grid>
    </Grid>
  );
}
