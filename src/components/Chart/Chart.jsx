import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";

function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}

export default function Chart() {
  const [chartOption, setChartOption] = useState(null);

  useEffect(() => {
    const fetchDataAndRenderChart = () => {
      axios
        .get("http://localhost:3000/data/")
        .then((response) => {
          const responseData = response.data;

          // Transforma los datos a la estructura que espera el gráfico
          const transformedData = responseData.map((item) => [
            item.date + " " + item.hour,
            item.price,
          ]);

          const option = {
            title: {
              text: `Precio Luz Hora - ${getFormattedDate()}`,
              left: "1%",
            },
            tooltip: {
              trigger: "axis",
            },
            grid: {
              left: "5%",
              right: "15%",
              bottom: "10%",
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
              },
              {
                type: "inside",
              },
            ],
            visualMap: {
              top: 50,
              right: 10,
              pieces: [
                //   { gt: 0, lte: 50, color: "#93CE07" },
                { gt: 100, lte: 150, color: "#FC7D02" },
                { gt: 150, lte: 200, color: "#FD0100" },
                { gt: 200, lte: 300, color: "#AA069F" },
                { gt: 300, color: "#AC3B2A" },
              ],
              outOfRange: {
                color: "#999",
              },
            },
            series: {
              name: "Beijing AQI",
              type: "line",
              data: transformedData.map((item) => item[1]),
              markLine: {
                silent: true,
                lineStyle: {
                  color: "#333",
                },
                data: [
                  { yAxis: 50 },
                  { yAxis: 100 },
                  { yAxis: 150 },
                  { yAxis: 200 },
                  { yAxis: 300 },
                ],
              },
            },
          };

          setChartOption(option);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchDataAndRenderChart();
  }, []);

  if (!chartOption) {
    return <div>Loading...</div>;
  }

  return (
    <ReactECharts
      option={chartOption}
      style={{ width: "1000%", height: "400px" }}
    />
  );
}
