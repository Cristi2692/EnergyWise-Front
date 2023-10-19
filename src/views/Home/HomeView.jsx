// import Grid from "@mui/material/Grid";
import Chart from "../../components/Chart/Chart";
import TableView from "../../components/Table/Table";
import Cards from "../../components/Cards/Cards";
import { Box, Grid, Paper } from "@mui/material";
// import lineas from "../../assets/imgHome/lineas.png";

export default function HomeView() {
  return (
    <Grid
      container
      sx={{
        position: "relative",
        marginTop: 5,
        marginX: "auto",
        maxWidth: "95%",
      }}
    >
      {/* Grid item para TableView o mensaje */}
      <Grid
        item
        xs={12}
        md={3}
        maxHeight="56vh"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          width: "100%",
          paddingRight: 2,
        }}
      >
        {/* <img
          src={lineas}
          alt="Descripción de la imagen"
          style={{
            filter: "grayscale(100%) brightness(0.76)",
            opacity: 0.2,
            position: "absolute",
            bottom: -170,
            left: -45,
            width: "450px", 
            height: "340px",
          }}
        /> */}
        <TableView />
      </Grid>

      {/* Grid item para Chart y Cards */}
      <Grid item xs={12} md={9} sx={{ paddingLeft: 2 }}>
        <Paper
          elevation={3}
          sx={{
            borderRadius: "15px",
            padding: "1.5rem",
            marginBottom: "2rem",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Chart />
        </Paper>
        <Box sx={{ width: "100%", mt: 2, mb: 12 }}>
          <Cards />
        </Box>
      </Grid>
    </Grid>
  );
}
