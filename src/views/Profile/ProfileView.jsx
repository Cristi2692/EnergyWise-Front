import { Stack, Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function ProfileView() {
  return (
    <>
      <Box mx={3}>
        <Stack direction="row" spacing={2} my={4} mx={2}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Stack>
        <Box mb={2} mt={10}>
          <Link to="/misdatos"> Mis dados / modificar </Link>
        </Box>
        <Box mb={54}>
          <Link to="#"> Centro de ayuda </Link>
        </Box>
      </Box>
    </>
  );
}
