import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#222329',
      light: '#D9D9D9',
      header: '#e1f1dd',
      card: '#a7c5eb',
      toggle: '#222329',
      button: {
        primary: '#fff',
        secondary: '#fb3640',
      },
      paper: '#fff',
    },
    primary: {
      main: '#51c4d3', //'#46BBB0',
    },
    secondary: {
      main: '#890596',
    },
    text: {
      primary: '#1b1a17',
      secondary: '#646769',
    },
    link: {
      primary: '#890596',
      secondary: '#fb3640',
    },
    title: {
      primary: '#fff',
      secondary: '#46BBB0',
      largeTitle: '#46BBB0',
    },
  },
  shadow: {
    primary: `0 0 10px 2px #3C4F76`,
    secondary: `0 0 8px 4px rgba(0,0,0,0.8)`,
    active: `0 0 15px 6px #2896CC`,
    button: `0 10px 6px -6px #3D3D3D`,
  },
});

export default theme;
