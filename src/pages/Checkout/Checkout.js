import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CheckoutStepper from './Stepper/Stepper'
import Login from './Login/Login'

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: theme.palette.secondary.main,
    height: '100vh',
  }, 
  container : {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width: '100vw',
  }
}));

const Checkout = () => {
  const classes = useStyles();
  
  return (
  <div className={classes.main}> 
  <CheckoutStepper>
  <Container className={classes.container}>
    <Login/>
  </Container>
  </CheckoutStepper>
  </div> 
  );
};
export default Checkout;
