import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00525D',
      light: '#0F9DB0',
      dark: '#004143',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#DBDBDB',
      light: '#e9e9e9',
      dark: '#898989',
      contrastText: '#000000',
     },
  },
  // overrides: {
  //   MuiOutlinedInput: {
  //     root: {
  //       backgroundColor: '#00525D', // Establece el color de fondo
  //     },
  //     input: {
  //       backgroundColor: '#00525D', // Establece el color de fondo del input interno
  //       color: '#FFFFFF',  // Establece el color del texto
  //     },
  //     notchedOutline: {
  //       borderColor: '#00525D', // Establece el color del borde
  //     }
  //   },
  //   MuiSelect: {
  //     icon: {
  //       color: '#FFFFFF', // Establece el color del ícono desplegable
  //     }
  //   },
  //   MuiMenu: {
  //     paper: {
  //       backgroundColor: '#00525D', // Establece el color de fondo cuando el Select está abierto
  //     }
    // }
  // }
});