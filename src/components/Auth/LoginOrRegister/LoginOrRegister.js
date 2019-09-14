import React, { useState } from "react";
import { useAuth } from "../../../states/AuthState";
import { useDict } from '../../../states/LangState';
import { goToRegister, goToLogin } from '../../../services/dynamicRouting'
import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { styles } from "../../../services/styleProvider";
import withStyles from "@material-ui/core/styles/withStyles";

const Login = (props) => {
  const { classes } = props;
  const dictionary = useDict();

  return (
    <div className={classes.background}>
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={goToLogin}
          >
            {dictionary.get('home.login')}
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            className={classes.submit}
            onClick={goToRegister}
          >
            {dictionary.get('home.register')}
          </Button>
      </Paper>
    </main>
    </div>
  );
}


export default withStyles(styles)(Login);
