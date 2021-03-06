import React from "react";
import { Route, Redirect } from "react-router-dom";
import { goToAuth } from './../services/dynamicRouting';
import { useSession } from "../states/AuthState";

const PrivateRoute = ({ component: Component, authLevel, notAuth, ...rest }) => {
  const { user, isAuth } = useSession();
  // se nao for pra ser auth e is auth, go to home
  // se nao for para ser auth ou se é auth e auth maior que level, renderiza
  return (
    <Route
      {...rest}
      render={props => {
        if((notAuth && !isAuth) || (isAuth && (user.auth >= authLevel))) {
          return (<Component {...props} />)
        } else {
          if(notAuth) {return <Redirect to="/" push />};
          console.log('coming here')
          goToAuth(true);
        }
      }}
    />
  );
};

export default PrivateRoute;
