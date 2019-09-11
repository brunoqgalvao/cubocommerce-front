import React from 'react'
import {Box} from '@material-ui/core'
import Image from 'material-ui-image'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const FormBanner = () => {
  return (
      <Image style={{paddingTop:'150px', width:'100%', position:'relative', objectFit:'cover'}} imageStyle={{ width: 'inherit' }	} src='/assets/banner-1.jpg' color={'#542281'}/>
  )
}

export default FormBanner
