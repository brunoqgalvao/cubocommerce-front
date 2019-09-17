import React, { useState } from 'react'
import { useProduct } from "../../../states/ProductState";
// import { useAuth } from "../../../states/AuthState";
// import { useDict } from '../../../states/LangState';
import CreditCardInput from 'react-credit-card-input';
import {
  Typography,
  Paper,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";
import { styles } from "../../../services/styleProvider";
import withStyles from "@material-ui/core/styles/withStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => ({
  // regra de estilo
  headerIcon: {
    padding:theme.spacing(2),
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
  }
}));



const CheckoutPayment = (props) => {  
  const { checkOutPrice } = useProduct();
  const { classes } = props;
  const innerClasses = useStyles();
  // const dictionary = useDict();
  const total = checkOutPrice();
  const [cardNumber,setCardNumber] = useState()
  const [name,setName] = useState()
  const [cvv,setCvv] = useState()
  const [date,setDate] = useState()

  
  return (
    <>
    <main className={classes.main}>
    <Paper className={classes.paper}>
    <div className={innerClasses.headerIcon}>
    <i className="fa fa-credit-card fa-2x" style={{alignSelf:'center'}}></i>
      <Typography variant="h5" style={{marginTop:'8px'}}>
        Cadastrar Cartão
      </Typography>
  </div>
      <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="nome">Nome no cartão</InputLabel>
    <Input
      id="name"
      name="text"
      autoComplete="off"
      autoFocus
      value={name}
      onChange={e => setName(name)}
    />
  </FormControl>
    <CreditCardInput
      cardNumberInputProps={{ value: cardNumber, onChange: ()=>setCardNumber(cardNumber) }}
      cardExpiryInputProps={{ value: date, onChange: ()=>setDate(date) }}
      cardCVCInputProps={{ value: cvv, onChange: () => setCvv(cvv) }}
      fieldClassName="input"
    />
  </Paper>
      </main>
      </>
)
}
export default withStyles(styles)(CheckoutPayment)