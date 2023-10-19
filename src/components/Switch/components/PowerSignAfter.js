import { styled } from "@mui/material";

export const PowerSignAfter = styled("div")(({checked = false}) => {

  return {
    content: '""',
    width: "2px",
    height: "100%",
    backgroundColor: checked ? "rgb(255, 255, 255)" : "rgb(156, 156, 156)",
    position: "absolute",
    top: "-60%",
    zIndex: 3,
    boxShadow: checked ? "0px 0px 5px rgb(151, 243, 255)" : "",
  };
});
