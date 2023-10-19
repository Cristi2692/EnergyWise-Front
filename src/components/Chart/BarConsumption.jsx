import { useEffect, useRef } from "react";
import * as echarts from "echarts";

function CostOfDevices({ data }) {
  console.log(data);
  const chartRef = useRef(null);

  const colors = [
    "#006775",
    "#2FC4D7",
    "#F05A39",
    "#B4C670",
    "#FFCF60",
    "#45B889",

    "#c71585",
  ];

  useEffect(() => {
    if (data.length === 0 || !chartRef.current) return;

    const myChart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: "Consumo por dispositivo",
        left: "center",
        textStyle: {
          fontSize: 18,
          color: "#002D33",
        },
        padding: [23, 0, 0, 0],
      },
      xAxis: {
        name: "Dispositivos",
        nameTextStyle: {
          fontWeight: "bold", // Establece el estilo en negrita
          fontSize: 13, // Ajusta el tamaño de la fuente según lo necesites
        },
        nameGap: 23,
        type: "category",
        data: data.map((item) => item.name),
      },
      yAxis: {
        name: "Consumo kW",
        nameTextStyle: {
          fontWeight: "bold", // Establece el estilo en negrita
          fontSize: 13, // Ajusta el tamaño de la fuente según lo necesites
        },
        type: "value",
      },
      series: [
        {
          data: data.map((item) => item.value),
          type: "bar",
          itemStyle: {
            color: (params) => colors[params.dataIndex % colors.length],
          },
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
}

export default CostOfDevices;
