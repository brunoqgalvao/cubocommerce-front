import React from 'react'
import FormHeader from './FormHeader/FormHeader';
import FormBanner from './FormBanner/FormBanner';
import FormItems from './FormItems/FormItems';
import FormCheckout from './FormCheckout/FormCheckout';

const OrderForm = () => {
  return (
    <>
      <FormHeader/>
      <FormBanner/>
      <FormItems/>
      <FormCheckout/>
    </>
  )
}

export default OrderForm
