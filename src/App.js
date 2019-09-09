import React from "react";
import { Container } from "@material-ui/core";
import States from "./states/States";
import Theme from "./services/Theme";
import AppRouter from "./routes/AppRouter";
import Alert from "./components/Alert/Alert";
import LangButton from "./components/Utilities/LangButton/LangButton";

function App() {
  return (
    <Theme>
      <States>
        <Container>
          <LangButton />
          <AppRouter>  
          </AppRouter>
          <Alert />
        </Container>
      </States>
    </Theme>
  );
}

export default App;

//BUG:
// when registering, name doesn't get uploaded in time, for some reason, it gives null
