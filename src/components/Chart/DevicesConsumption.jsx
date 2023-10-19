import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function DevicesConsumption() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Inicializa la instancia de ECharts
    const myChart = echarts.init(chartRef.current);

    // Colores personalizados para las series
    const colors = ["#F05A39", "#FFCF60", "#006775", "#00B098", "#2FC4D7"];

    // Configuración del gráfico
    const option = {
      title: {
        // Agregar el título aquí
        text: "Distribución de consumo", // El texto que deseas como título

        left: "center", // Alineación del título (puedes ajustarlo según tus preferencias)
        textStyle: {
          fontSize: 18, // Tamaño de fuente del título (ajústalo según tus preferencias)
          color: "#002D33",
        },
        padding: [23, 0, 0, 0],
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "90%",
        left: "center",
        bottom: "15%",
      },

      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
          // Asigna colores personalizados a las series
          color: colors,
        },
      ],
    };

    // Establece la opción en el gráfico
    myChart.setOption(option);

    // Limpia el gráfico cuando el componente se desmonta
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
}
