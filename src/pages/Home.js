import React from "react";
import { useDict } from '../states/LangState';
import {
  goToLogin,
  goToRegister,
  goToDashboard,
  goToLogout
} from "./../services/dynamicRouting";
import { useSession } from "../states/AuthState";
import { Typography, Paper, Avatar, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../services/styleProvider";

const Home = props => {
  const { classes } = props;
  const { isAuth, user } = useSession();
  const dictionary = useDict();
  const [photoURL, setPhotoURL] = React.useState("");
  
  React.useEffect(()=>{
    if(user != null){
      setPhotoURL(user.photoURL);
    }
  },[user])

  return (
    
  );
};

export default withStyles(styles)(Home);
