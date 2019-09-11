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
    utils: {
      boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
    }
  },
  typography: {
    "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});


const Theme = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      {props.children}
    </MuiThemeProvider>
  )
}

export default Theme
