import React from "react";
import { Helmet } from 'react-helmet';
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fazenda Cubo</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"></meta>
                <meta property="og:site_name" content="Fazenda Cubo"/>
                <meta property="og:title" content="Fazenda Cubo: Entregas de Quinta" />
                <meta property="og:description" content="Receba hortaliças ultra-frescas e prontas para consumo - produzidas perto da sua casa!" />
                <meta property="og:image" itemprop="image" content="/favicon-96x96.png"/>
                <meta property="og:type" content="website" />
                <meta property="og:updated_time" content="1440432930" />
                <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`}></script>
            </Helmet>
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
