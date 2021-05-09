import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#000',
      light: '#dbe2ef',
      toggle: '#000',
      button: {
        primary: '#fff',
        secondary: '#fb3640',
      },
      card: '#290149', //'#f3f4ed',
      header: '#282846', //'#434343',
      paper: '#000',
    },
    primary: {
      main: '#00e0ff',
    },
    secondary: {
      main: '#08d9d6',
    },
    text: {
      primary: '#f0f5f9',
      secondary: '#1b262c', //'#c9d6df',
    },
    link: {
      primary: '#08d9d6',
      secondary: '#fb3640',
    },
    title: {
      primary: '#000',
      secondary: '#46BBB0',
      largeTitle: '#46BBB0',
    },
  },
  shadow: {
    primary: `0 0 10px 5px rgba(255,249,255,0.58)`,
    secondary: `0 0 8px 4px rgba(255,249,255,0.58)`,
    active: `0 0 25px 8px #46BBB0`,
    button: `0 10px 6px -6px #1F1F1F`,
  },
});

export default theme;
