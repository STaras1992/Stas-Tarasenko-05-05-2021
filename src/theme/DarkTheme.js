import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#000',
      light: '#dbe2ef',
      toggle: '#000',
      header: '#434343',
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
    title: {
      primary: '#000',
      secondary: '#46BBB0',
      largeTitle: '#46BBB0',
    },
  },
  toggle: {
    thumbOnColor: 'yellow',
    trackOnColor: 'red',
  },
});

export default theme;
