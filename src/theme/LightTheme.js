import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#222329',
      light: '#D9D9D9',
      header: '#000',
      paper: '#222329',
    },
    primary: {
      main: '#46BBB0',
    },
    secondary: {
      main: '#D1157D',
    },
    text: {
      primary: '#D9D9D9',
      secondary: '#A5A4BF',
    },
    title: {
      primary: '#fff',
      secondary: '#46BBB0',
      largeTitle: '#46BBB0',
    },
  },
});

export default theme;
