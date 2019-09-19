import React from 'react'
import logo from './logo.png'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  // style rule
  avatar: props => ({
    width:80,
    height:80,
    ...props.style?props.style:null
  })
  
});

const Logo = (props) => {  
  const classes = useStyles(props)
  console.log(classes)

  return (


  <img src={logo} alt="fazenda cubo" className={classes.avatar}></img>
)
}
export default Logo