import { styled } from "@mui/material";

export const ContainerLabelSwitch = styled("div")(({ checked, width = '22px', height = '22px' }) => ({
  position: "relative",
  width: width,
  height: height,
  backgroundColor: checked ? "#2FC4D7" : "#EEECEC",
  borderRadius: "50%",
  zIndex: 1,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: checked
    ? "2px solid rgb(255, 255, 255)"
    : "2px solid rgb(186, 186, 186)",
    boxShadow: checked
    ? "0px 0px 1px rgb(151, 243, 255) inset, 0px 0px 2px rgb(151, 243, 255) inset, 0px 0px 5px rgb(151, 243, 255) inset, 0px 0px 10px rgb(151, 243, 255), 0px 0px 15px rgb(151, 243, 255), 0px 0px 2px rgb(151, 243, 255)"
    : "0px 0px 3px rgb(2, 2, 2) inset",

}));
