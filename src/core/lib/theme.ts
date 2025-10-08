import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: 'var(--font-ibm-thai), sans-serif',
      h1: { fontWeight: 600 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 500 },
      h4: { fontWeight: 500 },
      h5: { fontWeight: 500 },
      h6: { fontWeight: 500 },
      subtitle1: { fontWeight: 400 },
      subtitle2: { fontWeight: 400 },
      body1: { fontWeight: 400 },
      body2: { fontWeight: 400 },
      button: { fontWeight: 600 },
    },
    palette: {
      primary: { main: '#523d2e' },
      secondary: { main: '#f0e3dd' },
      background: { default: '#ffffff', paper: '#eef2f6' },
    },
  }),
);

export default theme;
