import React from "react";
import { useProduct } from "../../../states/ProductState";
import { makeStyles } from '@material-ui/core/styles';
import {Table, Typography} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { styles } from "../../../services/styleProvider";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    maxHeight:'80vh',
    '& td': {
      padding: '0px 6px 0px 0px',
      textAlign:'center',
    }
  },
  headerIcon: {
    padding:theme.spacing(2),
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
  }
}));

const CheckoutConfirmOrder = (props) => {

  const { productsInBasket, checkOutPrice } = useProduct();
  const { classes } = props;
  const innerClasses = useStyles();

  const products = productsInBasket();
  const total = checkOutPrice();

  return (
    <main className={classes.main}>
    <Paper className={classes.paper}>
    <div className={innerClasses.headerIcon}>
    <i className="fa fa-shopping-cart fa-2x" style={{alignSelf:'center'}}></i>
      <Typography variant="h5" style={{marginTop:'8px'}}>
    Carrinho
  </Typography>
  </div>

  <Table className={innerClasses.table} stickyheader size="small">
    <TableHead>
      <TableRow>
        <TableCell>Produto (un.)</TableCell>
        <TableCell align="right">Qtde</TableCell>
        <TableCell align="right">Total</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {products.map(product => (
        <TableRow key={product.name}>
          <TableCell component="th" scope="row">
          {product.name} ({ product.unit})
          </TableCell>
          <TableCell align="right">{product.orderQty}</TableCell>
          <TableCell align="right">R${product.price * product.orderQty},00</TableCell>
        </TableRow>
      ))}
        <TableRow key={'total'}>
          <TableCell component="th" scope="row">

          </TableCell>
          <TableCell align="right">Total: </TableCell>
          <TableCell align="right"><span style={{fontWeight:'bold'}}>R${total},00</span></TableCell>
        </TableRow>
    </TableBody>
  </Table>
  </Paper>
      </main>
);
};
export default withStyles(styles)(CheckoutConfirmOrder);