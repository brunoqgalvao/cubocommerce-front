import React from 'react'
import { useModal } from '../../../states/ModalState'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography, TextField, ClickAwayListener } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    minWith:320,
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
  textField: {
    width: '100%',
    padding:theme.spacing(1),
  }
}));
const HelpModal = () => {  
  
  const modal = useModal();
  const classes = useStyles();

  return (
    <div className={classes.main}>
            <ClickAwayListener onClickAway={() => modal.close('feedbackModal')}>
  <Card className={classes.card}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Deixe sua mensagem!
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Entraremos em contato em breve :)
      </Typography>
      <TextField
        id="standard-name"
        label="Nome"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="standard-phone"
        label="Telefone"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="outlined-dense-multiline"
        label="Deixe sua mensagem"
        className={classes.textField}
        margin="dense"
        variant="outlined"
        multiline
        rows="4"
        rowsMax="6"
      />
    </CardContent>
  <CardActions style={{justifyContent:'center'}}>
    <Button size="small" color="primary">
      Enviar Mensagem
    </Button>
  </CardActions>
</Card>
</ClickAwayListener>
</div>
)
}
export default HelpModal