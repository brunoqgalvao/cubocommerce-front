import React from 'react'
import { useModal } from '../../../../states/ModalState'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 100,
    backgroundSize:'contain',
  },  
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:'100vh',
  },
});
const HelpModal = () => {  
  
  const classes = useStyles();
  const handleWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=5511991625959");

  }

  return (
    <div className={classes.main}>
  <Card className={classes.card}>
  <CardActionArea>
    <CardMedia
      className={classes.media}
      image="/assets/logo.png"
      title="Precisando de ajuda?"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Precisando de Ajuda?
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Envie uma mensagem ou entre em contato pelo whatsapp e responderemos em seguida!
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary" onClick={handleWhatsapp}>
      <a>Whatsapp</a>
    </Button>
    <Button size="small" color="primary">
      Mensagem
    </Button>
  </CardActions>
</Card>
</div>
)
}
export default HelpModal