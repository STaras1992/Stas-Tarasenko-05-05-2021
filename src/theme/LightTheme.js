import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#222329',
      light: '#D9D9D9',
      header: '#fff',
      toggle: '#222329',
      paper: '#fff',
    },
    primary: {
      main: '#46BBB0',
    },
    secondary: {
      main: '#890596',
    },
    text: {
      primary: '#1b1a17',
      secondary: '##646769',
    },
    title: {
      primary: '#fff',
      secondary: '#46BBB0',
      largeTitle: '#46BBB0',
    },
  },
  toggle: {
    thumbOnColor: 'blue',
    trackOnColor: 'green',
  },
});

export default theme;
