import { FormControlLabel, Switch as MuiSwitch } from "@mui/material";
import { useDevicesContext } from "../../context/DevicesContext";
import {
  ContainerLabelSwitch,
  PowerSign,
  PowerSignAfter,
  PowerSignBefore,
} from "./components";

function Switch(props) {
  const { isActive, width, height, idDevModel, idDevice } = props;
  const { switchDevice } = useDevicesContext();

  const handleSwitchChange = async () => {
    console.log(idDevModel, idDevice);
    try {
      await switchDevice(idDevModel, idDevice);
    } catch (error) {
      console.error("Error al cambiar el estado del dispositivo:", error);
    }
  };

  return (
    <FormControlLabel
      control={
        <MuiSwitch
          checked={isActive}
          onChange={handleSwitchChange}
          sx={{ display: "none" }}
        />
      }
      label={
        <ContainerLabelSwitch checked={isActive} width={width} height={height}>
          <PowerSign checked={isActive}>
            <PowerSignBefore checked={isActive} />
            <PowerSignAfter checked={isActive} />
          </PowerSign>
        </ContainerLabelSwitch>
      }
    />
  );
}

export default Switch;
