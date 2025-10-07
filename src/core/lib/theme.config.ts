import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "'IBM Plex Sans Thai', 'IBM Plex Sans', sans-serif",
    },
    palette: {
      primary: { main: '#007AFF' },
      secondary: { main: '#FF8C00' },
      background: { default: '#F9FAFB' },
    },
  }),
);

export default theme;
