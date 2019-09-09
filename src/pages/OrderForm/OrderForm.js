import React from 'react'
import Header from '../../components/Header/Header';
import FormBanner from './FormBanner/FormBanner';
import FormItems from './FormItems/FormItems';

const OrderForm = () => {
  return (
    <>
      <Header/>
      <FormBanner/>
      <FormItems/>
      <FormCheckout/>
    </>
  )
}

export default OrderForm
