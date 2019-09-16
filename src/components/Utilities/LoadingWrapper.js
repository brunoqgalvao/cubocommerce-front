import React from "react";
import { ClipLoader } from "react-spinners";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../../services/styleProvider";
import logo from './LogoSemNome.png';

const LoadingWrapper = props => {
  const { classes } = props;

  const { isLoading } = props;
  if (!isLoading) return <div> {props.children} </div>;
  else
    return (
      <div className={classes.paper} style={{position:'relative'}}>
        <img src={logo} alt="fazenda cubo" style={{height:'80px',width:'80px', position:'absolute', top:'37px'}}></img>
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
