import { green } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    green: {
      [key: string]: string;
    };
  }

  interface PaletteOptions {
    green?: {
      [key: string]: string;
    };
  }
}

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: 'var(--font-ibm-thai), sans-serif',
      h1: { fontWeight: 600 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 500 },
      h4: { fontWeight: 500 },
      h5: { fontWeight: 500 },
      h6: { fontWeight: 700 },
      subtitle1: { fontWeight: 400 },
      subtitle2: { fontWeight: 400 },
      body1: { fontWeight: 400 },
      body2: { fontWeight: 400 },
      button: { fontWeight: 600 },
    },
    palette: {
      primary: { main: '#523d2e' },
      secondary: { main: '#d0d1d2' },
      background: { default: '#ffffff', paper: '#eef2f6' },
      green: {
        ...green,
        500: '#44b700',
      },
    },
  }),
);

export default theme;
