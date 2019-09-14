import React, { useState } from 'react'
import { useProduct } from "../../../states/ProductState";
import { useAuth } from "../../../states/AuthState";
import { useDict } from '../../../states/LangState';
import { goToRegister } from '../../../services/dynamicRouting'
import PaymentCard from 'react-payment-card-component'
import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";
import { styles } from "../../../services/styleProvider";
import withStyles from "@material-ui/core/styles/withStyles";

const CheckoutPayment = (props) => {  
  const { productsInBasket, checkOutPrice } = useProduct();
  const { classes } = props;
  const dictionary = useDict();
  const total = checkOutPrice();
  const [cardNumber,setCardNumber] = useState('')
  const [name,setName] = useState('')
  const [cvc,setCvc] = useState('')
  const [date,setDate] = useState('')

  
  return (
<>  
    <div style={{height:'16px'}}>
      </div>
    <PaymentCard
      bank="itau"
      model="personnalite"
      type="black"
      brand="mastercard"
      number="4111111111111111"
      cvv="202"
      holderName="Owen Lars"
      expiration="12/20"
      flipped={false}
    />
    <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="cardNumber">Número do Cartão</InputLabel>
    <Input
      id="cardNumber"
      name="text"
      autoComplete="off"
      autoFocus
      value={cardNumber}
      onChange={e => setCardNumber(e.target.value)}
    />
  </FormControl>
    <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="name">
      Nome
    </InputLabel>
    <Input
      name="name"
      type="text"
      id="name"
      autoComplete="off"
      value={name}
      onChange={e => setName(e.target.value)}
    />
  </FormControl>
    <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor="cvc">
      cvc
    </InputLabel>
    <Input
      name="cvc"
      type="text"
      id="cvc"
      autoComplete="off"
      value={cvc}
      onChange={e => setCvc(e.target.value)}
    />
  </FormControl>
      <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="date">
        Nome
      </InputLabel>
      <Input
        name="date"
        type="text"
        id="date"
        autoComplete="off"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
    </FormControl>
    </>
)
}
export default withStyles(styles)(CheckoutPayment)