import React from "react";
import { makeStyles } from "@material-ui/styles";
import CheckoutStepper from './Stepper/Stepper'
import CheckoutAddress from './CheckoutAddress/CheckoutAddress'
import CheckoutPayment from './CheckoutPayment/CheckoutPayment'
import CheckoutConfirmOrder from './CheckoutConfirmOrder/CheckoutConfirmOrder'
import HelpFab from '../../components/Utilities/HelpFab/HelpFab'
const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: theme.palette.secondary.main,
    minHeight: '100vh',
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
    <>
    <HelpFab/>
  <div className={classes.main}> 
  <CheckoutStepper>
    <CheckoutAddress/>
    <CheckoutConfirmOrder/>
    <CheckoutPayment/>
  </CheckoutStepper>
  </div> 
  </>
  );
};
export default Checkout;
