import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#844eb1',
      main: '#542281',
      dark: '#240054',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#83cc30',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


const Theme = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      {props.children}
    </MuiThemeProvider>
  )
}

export default Theme
