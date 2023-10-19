import ReactECharts from "echarts-for-react";

function CostOfDevices({ data }) {
  const maxValue =
    data.length > 0 ? Math.max(...data.map((item) => item.value)) : 100;

  const option = {
    title: {
      text: "Gasto por dispositivo",
      left: "center",
      textStyle: {
        fontSize: 18,
        color: "#002D33",
      },
      padding: [23, 0, 0, 0],
    },
    xAxis: {
      name: "Gasto",
      nameTextStyle: {
        fontWeight: "bold", // Establece el estilo en negrita
        fontSize: 13, // Ajusta el tamaño de la fuente según lo necesites
      },
      type: "value",
      axisLabel: {
        formatter: function (value) {
          return `${value} €`;
        },
      },
    },
    yAxis: {
      name: "Dispositivos",
      nameTextStyle: {
        fontWeight: "bold", // Establece el estilo en negrita
        fontSize: 13, // Ajusta el tamaño de la fuente según lo necesites
      },
      nameGap: 23,
      type: "category",
      data: data.map((item) => item.name),
    },
    visualMap: {
      orient: "horizontal",
      left: "center",
      min: 0,
      max: maxValue,
      text: ["Gasto más alto", "Gasto más bajo"],
      dimension: 0,
      inRange: {
        color: ["#00B098", "#FFCF60", "#F05A39"],
      },
    },
    series: [
      {
        type: "bar",
        data: data.map((item) => item.value),
        encode: {
          x: "value",
          y: "name",
        },
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={option} style={{ height: "400px" }} />
    </div>
  );
}

export default CostOfDevices;
