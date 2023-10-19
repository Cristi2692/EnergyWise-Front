import { styled } from "@mui/material";

export const PowerSignBefore = styled("div")(({checked = false}) => {

  return {
    content: '""',
    width: "4px",
    height: "100%",
    backgroundColor: checked ? "rgb(146, 180, 184)" : "#EEECEC",
    position: "absolute",
    top: "-60%",
    zIndex: 2,
  };
});
