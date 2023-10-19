import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#006775',
      light: '#2FC4D7',
      dark: '#002D33',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#e1dfdf',
      light: '#f0f0f0',
      dark: '#898989',
      contrastText: '#000000',
     },
     error: {
      main: '#F05A39',
    },
    warning: {
      main: '#FFCF60',
    },
    success: {
      main: '#00B098',
    },
  },
});