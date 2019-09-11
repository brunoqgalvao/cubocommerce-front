import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign:"center",
    marginBottom:theme.spacing(1),
  },
  appBar: {
    backgroundColor:'white',
    color:theme.palette.primary.main,
    left:0,
    width:'100vw',
    height:'50px',
  },
  toolBar: {
    alignItems:'center',
    position: "relative",
    padding:'0px',
  }
}));

const Header = () => {
  
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
            <img src="./assets/logoSemNome.png" alt="logo fazenda cubo" style={{height:'30px', position: "absolute", top:"10px", left:'15px'}}/>
          <Typography variant="h6" className={classes.title}>
            Quinta (26/08) 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    <div style={{height:"45px"}}>
    </div>
    </>
  )
}

export default Header
