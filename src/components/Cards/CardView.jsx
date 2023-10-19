import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardMedia } from "@mui/material";

export default function MediaControlCard() {
  const [data, setData] = useState({
    item: {},
  });

  useEffect(() => {
    axios
      .get("https://energywiseback.azurewebsites.net/data/prices")
      .then((response) => {
        const transformedData = {
          item: {},
        };

        response.data.forEach((item) => {
          transformedData.item[item.type] = item;
        });

        setData(transformedData);
      })
      .catch((error) => {
        console.error("Error fetching prices:", error);
      });
  }, []);

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ width: "90%", margin: "0 auto" }}
    >
      <Grid item xs={4} sx={{ width: "200px" }}>
        <Card
          elevation={3}
          sx={{
            display: "flex",
            width: "90%",
            maxHeight: "75px",
            // marginX: "5%",
            borderRadius: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "calc(100% - 100px)",
              flexShrink: 0,
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="body1"
                sx={{ marginTop: "-0.7rem" }}
              >
                Mínimo del día
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                component="div"
              >
                {data.item.min
                  ? data.item.min.price.toFixed(5) + "€kWh"
                  : "Cargando..."}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {data.item.min
                  ? data.item.min.hour.replace("-", " - ") + "H"
                  : "Cargando..."}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="div"
            sx={{
              width: 100,
              flexShrink: 0,
              backgroundColor: (theme) => theme.palette.success.main,
              display: "flex",
              alignItems: "center",
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={4} sx={{ width: "200px" }}>
        <Card
          elevation={3}
          sx={{
            display: "flex",
            width: "90%",
            maxHeight: "75px",
            // marginX: "5%",
            borderRadius: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "calc(100% - 100px)",
              flexShrink: 0,
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="body1"
                sx={{ marginTop: "-0.7rem", marginBottom: "0.4rem" }}
              >
                Media del día
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                component="div"
              >
                {data.item.avg
                  ? data.item.avg.price.toFixed(5) + "€kWh"
                  : "Cargando..."}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="div"
            sx={{
              width: 100,
              flexShrink: 0,
              backgroundColor: (theme) => theme.palette.warning.main,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={4} sx={{ width: "200px" }}>
        <Card
          elevation={3}
          sx={{
            display: "flex",
            width: "90%",
            maxHeight: "75px",
            // marginX: "5%",
            borderRadius: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "calc(100% - 100px)",
              flexShrink: 0,
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="body1"
                sx={{ marginTop: "-0.7rem" }}
              >
                Máximo del día
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                component="div"
              >
                {data.item.max
                  ? data.item.max.price.toFixed(5) + "€kWh"
                  : "Cargando..."}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {data.item.max
                  ? data.item.max.hour.replace("-", " - ") + "H"
                  : "Cargando..."}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="div"
            sx={{
              width: 100,
              flexShrink: 0,
              backgroundColor: (theme) => theme.palette.error.main,
              display: "flex",
              alignItems: "center",
            }}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
