import React from "react";
import States from "./states/States";
import Theme from "./services/Theme";
import AppRouter from "./routes/AppRouter";
import Alert from "./components/Alert/Alert";
import Snackbar from "./components/Snackbar/Snackbar";
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  return (
    <Theme>
      <CssBaseline/>
      <States>
          <AppRouter>  
          </AppRouter>
          <Alert />
          <Snackbar/>
      </States>
    </Theme>
  );
}

export default App;

//BUG:
// when registering, name doesn't get uploaded in time, for some reason, it gives null
