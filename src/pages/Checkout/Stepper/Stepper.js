import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { goToForm, goToHome, goToConfirmPayment } from "../../../services/dynamicRouting";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5)
  }
}));

const CheckoutStepper = ({ children }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = children;
  const theme = useTheme();
  const stepLabel = ['Pedido','Endereço','Carrinho','Pagamento','Finalizar'];

  function handleNext() {
    if (activeStep === steps.length - 1) {
      confirmPayment();
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);      
    }
  }

  const confirmPayment = () => {
    goToConfirmPayment();
  }

  function handleBack() {
    if (activeStep === 0) {
      goToForm();
    } else {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    }
  }

  return (
    <>
      <MobileStepper
        variant="dots"
        steps={steps.length}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            {stepLabel[activeStep+2]}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            {stepLabel[activeStep]}
          </Button>
        }
      />
      {children[activeStep]}
      <Container
        style={{ textAlign: "right", position: "fixed", bottom: "16px" }}
      >
        <Button variant="contained" color="primary" onClick={handleNext}>
          {stepLabel[activeStep+2]}
        </Button>
      </Container>
    </>
  );
};
export default CheckoutStepper;
