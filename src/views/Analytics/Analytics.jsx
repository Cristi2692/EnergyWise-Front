import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PowerBIReport from "../../components/PowerBi/PowerBi";
import BarConsumption from "../../components/Chart/BarConsumption";
import CostOfDevices from "../../components/Chart/CostOfDevices";
import axios from "axios";

export default function Analytics() {
  const [value, setValue] = useState(0);
  const [barData, setBarData] = useState([]);
  const [costData, setCostData] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Llamada para BarConsumption
    axios
      .get("http://localhost:3000/summary/consumptionDevs", config)
      .then((response) => {
        const transformedData = response.data.consumption.map((item) => ({
          value: item["device_consumption.totalKwh"],
          name: item.tag,
        }));
        const uniqueBarData = Array.from(
          new Set(transformedData.map(JSON.stringify))
        ).map(JSON.parse);
        const filteredBarData = uniqueBarData.filter(
          (item) => item.value !== null
        );

        setBarData(filteredBarData);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });

    // Llamada para CostOfDevices
    axios
      .get("http://localhost:3000/summary/consumptionDevs", config) // (Asegúrate de que la URL es correcta para esta llamada)
      .then((response) => {
        const data = response.data.moneyConsumption.map((item) => ({
          value: item["device_consumption.totalMoney"],
          name: item.tag,
        }));
        const uniqueData = Array.from(new Set(data.map(JSON.stringify))).map(
          JSON.parse
        );
        const filteredData = uniqueData.filter((item) => item.value !== null);
        setCostData(filteredData);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#E1DFDF",
      }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Electricidad" />
        <Tab label="Dispositivos" />
      </Tabs>
      {value === 0 && <PowerBIReport />}
      {value === 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
            bgcolor: "#E1DFDF",
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              height: "430px",
              justifyContent: "center",
              alignItems: "center",
              width: "94.5%",
              backgroundColor: "white",
              borderRadius: "10px",
              mb: 5,
            }}
          >
            <BarConsumption data={barData} />
          </Box>
        </Box>
      )}

      {value === 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
            bgcolor: "#E1DFDF",
          }}
        >
          <Box
            sx={{
              height: "430px",
              justifyContent: "center",
              alignItems: "center",
              width: "94.5%",
              backgroundColor: "white",
              borderRadius: "10px",
              mb: 5,
            }}
          >
            <CostOfDevices data={costData} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
