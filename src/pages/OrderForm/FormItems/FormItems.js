import React from 'react';
import FormItem from './FormItem/FormItem';
import List from '@material-ui/core/List';
import { useProduct } from '../../../states/ProductState';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const FormItems = () => {

  const classes = useStyles();
  const { products } = useProduct();

  return (
    <List dense className={classes.root}>
      {products.map((product) => {
        return  <FormItem product={product} key={product.id}/>
      })}
    </List>

  )
}

export default FormItems
