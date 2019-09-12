import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
}));

function getSteps() {
  const steps = [
    {
      label: 'Confimar Pedido',
      component: <p>teste</p>
    },
    {
      label: 'Indicar Endereço',
      component: <p>teste</p>
    },
    {
      label: 'Realizar Pagamento',
      component: <p>teste</p>
    }
  ]
  return steps;
}

const CheckoutStepper = ({children}) => {  

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }
  
  return (
    <>
  <div className={classes.root}>
  <Stepper activeStep={activeStep} alternativeLabel>
    {steps.map(step => (
      <Step key={step.label}>
        <StepLabel></StepLabel>
      </Step>
    ))}
  </Stepper>
  </div>
  {children}
  <div>
  <Button
      disabled={activeStep === 0}
      onClick={handleBack}
      className={classes.backButton}
    >
      Back
    </Button>
    <Button variant="contained" color="primary" onClick={handleNext}>
      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
    </Button>
  </div>
  </>
)
}
export default CheckoutStepper