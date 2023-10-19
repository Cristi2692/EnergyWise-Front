import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Spinergraph from "../Spiners/Spinergraph";

function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}

export default function Chart() {
  const [chartOption, setChartOption] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchDataAndRenderChart = () => {
      setTimeout(() => {
        axios
          .get("http://localhost:3000/data/")
          .then((response) => {
            const responseData = response.data;

            // Transforma los datos a la estructura del gráfico
            const transformedData = responseData.map((item) => [
              item.hour + " H",
              item.price,
            ]);

            const option = {
              title: {
                text: `Precio Luz Hora - ${getFormattedDate()}`,
                left: "28%",
                textStyle: {
                  fontFamily: theme.typography.fontFamily,
                  fontSize: theme.typography.h6bold.fontSize,
                  fontWeight: theme.typography.h6bold.fontWeight,
                },
              },
              tooltip: {
                trigger: "axis",
              },
              grid: {
                left: "6%",
                right: "6%",
                bottom: "20%",
              },
              xAxis: {
                data: transformedData.map((item) => item[0]),
              },
              yAxis: {},
              toolbox: {
                right: 10,
                feature: {
                  dataZoom: {
                    yAxisIndex: "none",
                  },
                  restore: {},
                  saveAsImage: {},
                },
              },
              dataZoom: [
                {
                  startValue: "2014-06-01",
                  backgroundColor: "rgba(0, 82, 93, 0.1)",
                  bottom: "12%",
                },
                {
                  type: "inside",
                },
              ],
              visualMap: {
                type: "piecewise",
                pieces: [
                  {
                    min: 0,
                    max: 0.15,
                    label: "0 - 0.15€/kWh      ",
                    color: theme.palette.success.main,
                  },
                  {
                    min: 0.15,
                    max: 0.2,
                    label: "0.15 - 0.20€/kWh      ",
                    color: theme.palette.warning.main,
                  },
                  {
                    min: 0.2,
                    label: "+ 0.20€/kWh",
                    color: theme.palette.error.main,
                  },
                ],
                outOfRange: {
                  color: "#999",
                },

                dimension: 1,
                orient: "horizontal",
                bottom: 5,
                left: "center",
                right: null,
              },

              series: {
                name: "Precio kWh",
                type: "line",
                data: transformedData.map((item) => item[1]),
                markLine: {
                  silent: true,
                  lineStyle: {
                    color: "#DBDBDB",
                  },
                  data: [
                    { yAxis: 0.05 },
                    { yAxis: 0.1 },
                    { yAxis: 0.15 },
                    { yAxis: 0.2 },
                    { yAxis: 0.25 },
                    { yAxis: 0.3 },
                  ],
                },
              },
            };

            setChartOption(option);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, 750);
    };

    fetchDataAndRenderChart();
  }, []);

  if (!chartOption) {
    return (
      <Box
        sx={{
          backgroundColor: "#ffffff",
          width: "100%",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <Spinergraph />
      </Box>
    );
  }

  return (
    <ReactECharts
      option={chartOption}
      style={{ width: "100%", height: "50vh" }}
    />
  );
}
