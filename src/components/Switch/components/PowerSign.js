import { styled } from "@mui/material";

export const PowerSign = styled("div")(({checked = false}) => {
  return {
    position: "relative",
    width: "20%",
    height: "20%",
    border: checked
      ? "3px solid rgb(255, 255, 255)"
      : "3px solid rgb(156, 156, 156)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: checked
      ? "0px 0px 5px rgb(151, 243, 255), 0px 0px 5px rgb(151, 243, 255) inset"
      : "",
  };
});
