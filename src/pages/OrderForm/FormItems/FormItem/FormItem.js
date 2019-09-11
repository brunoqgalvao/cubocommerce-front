import React from 'react'
import { useAlert } from '../../../../states/AlertState';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core/';
import { useProduct } from '../../../../states/ProductState';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    borderRadius:'50%',
    margin: theme.spacing(0)
  },
  avatar: {
    height: '60px',
    width: '60px',
  },
  card: {
    boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
    marginBottom: theme.spacing(1)
  }
}));


const FormItem = (props) => {  
  
  const {product} = props;
  const { placeOrder, removeOrder } = useProduct();
  const classes = useStyles();
  const { showForSeconds } = useAlert();
  const handleAdd = () => {
    placeOrder(product.id);
  }
  const handleRemove = () => {
    removeOrder(product.id);
  }

  return (
          <Container>
          <ListItem className={classes.card}>
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt={product.name}
                src={product.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText id={product.id} primary={product.name} secondary={<><span>R${product.price},00</span>/<span>{product.unit}</span></>} style={{paddingLeft:'16px',paddingRight:'86px'}}/>
            <ListItemSecondaryAction style={{minWidth:'50px'}}>
              <div>
              <div>
              {product.orderQty==0?"":<IconButton variant="outlined" color="secondary" className={classes.button} onClick={handleRemove}><span style={{fontSize:'22pt'}}>-</span></IconButton>}
              {product.orderQty==0?"":<span style={{fontWeight:'bold'}}>{product.orderQty}</span>}
              <Tooltip title="Add" aria-label="add" placement="top">
              <IconButton variant="contained" color="primary"className={classes.button} onClick={handleAdd}><AddCircleIcon/></IconButton>
              </Tooltip>
              </div>
              {/* <div style={{textAlign:'center'}}>
              <span>R${product.price * count},00</span>
              </div> */}
              </div>
            </ListItemSecondaryAction>
            
          </ListItem>
          </Container>
  )
}
export default FormItem