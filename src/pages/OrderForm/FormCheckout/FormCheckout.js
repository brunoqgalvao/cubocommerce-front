import React from 'react'
import { useProduct } from '../../../states/ProductState'
import { Button, Typography, AppBar } from '@material-ui/core'
import { goToCheckout } from '../../../services/dynamicRouting'

const FormCheckout = () => {

  const { checkOutPrice, numberOfItemsInBasket } = useProduct();

  const total = checkOutPrice();
  const amount = numberOfItemsInBasket();

  return (
    <>
    <AppBar color="secondary" style={{position:'fixed', bottom:0, top:'auto', height:'60px'}}>
      <Typography style={{textAlign:'center',backgroundColor:'white', color:"#2f4a0f"}}>
        {amount} items no pedido  R$ {total},00
      </Typography>
      <Button variant="contained" color='secondary' style={{width:'100%'}} onClick={goToCheckout}>Finalizar Pedido</Button>
    </AppBar>
    <div style={{height:'60px'}}>
    </div>
    </>
  )
}

export default FormCheckout
