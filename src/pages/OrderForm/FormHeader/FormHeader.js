import React from 'react'
import { useModal } from '../../../states/ModalState'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import HelpFab from '../../../components/Utilities/HelpFab/HelpFab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './LogoSemNome.png'

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
  const  modal  = useModal();

  return (
    <>
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
            <img src={logo} alt="logo fazenda cubo" style={{height:'30px', position: "absolute", top:"10px", left:'4%'}}/>
          <Typography variant="h6" className={classes.title}>
            Quinta (26/08) 
          </Typography>
          <i onClick={() => modal.open("helpModal")} className="fa fa-question fa-1x" style={{height:'30px', position: "absolute", top:"18px", right:'7%'}}></i>
        </Toolbar>
      </AppBar>
    </div>
    <div style={{height:"45px"}}>
    </div>
    <HelpFab hide style={{display:'none'}}/>
    </>
  )
}

export default Header
