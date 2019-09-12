import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function FormCard({product, handleAdd, handleRemove}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.imageUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {product.name}
          </Typography>
          <Typography component="p" style={{textAlign:"left",marginBottom:'1em'}}>
          R${product.price},00
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:'flex-end'}}>
          <IconButton variant="outlined" color="secondary" className={classes.button} onClick={handleRemove}><span style={{fontSize:'22pt'}}>-</span></IconButton>
          <span style={{fontWeight:'bold'}}>{product.orderQty}</span>
          <IconButton variant="contained" color="primary"className={classes.button} onClick={handleAdd}><AddCircleIcon/></IconButton>
      </CardActions>
    </Card>
  );
}