import React from "react";
import { ClipLoader } from "react-spinners";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../services/styleProvider";
import Logo from './Logo/Logo'
import logo from './LogoSemNome.png';

const LoadingWrapper = props => {
  const { classes } = props;

  const { isLoading } = props;
  if (isLoading) return <div> {props.children} </div>;
  else
    return (
      <div className={classes.paper} style={{position:'relative'}}>
        <Logo style={{position:'absolute',top:'37px'}}/>
        <ClipLoader
          sizeUnit={"px"}
          size={120}
          color={props.theme.palette.secondary.main}
          loading={true}
        />
      </div>
    );
};

export default withStyles(styles, {withTheme: true})(LoadingWrapper);
