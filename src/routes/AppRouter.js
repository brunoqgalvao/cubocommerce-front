import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../components/Auth/Login";
import Logout from "../components/Auth/Logout";
import Register from "../components/Auth/Register";
import LoginOrRegister from "../components/Auth/LoginOrRegister/LoginOrRegister";
import PaymentCallback from './../pages/Checkout/PaymentCallback/PaymentCallback'
import SaveAddress from '../pages/Checkout/SaveAddress/SaveAddress';
import Dashboard from "../pages/Dashboard";
import { createBrowserHistory } from "history";
import LoadingWrapper from "../components/Utilities/LoadingWrapper";
import { useSession } from "../states/AuthState";
import HelpFab from '../components/Utilities/HelpFab/HelpFab';

export const history = createBrowserHistory();
// Fazer protected route depois
const AppRouter = props => {
  return (
    <LoadingWrapper isLoading={useSession().authLoading}>
      <Router history={history}>
        <Switch>
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            authLevel={1}
          />
          <PrivateRoute
            exact
            path="/checkout"
            component={Checkout}
            authLevel={0}
          />
          <PrivateRoute exact path="/newaddress" component={SaveAddress} authLevel={0}/>
          <PrivateRoute exact path="/payment" component={PaymentCallback} authLevel={0}/>
          <PrivateRoute exact path="/login" component={Login} notAuth/>
          <PrivateRoute exact path="/register" component={Register} notAuth/>
          <PrivateRoute exact path="/auth" component={LoginOrRegister} notAuth/>
          <Route exact path="/logout" component={Logout}/>
          <Route path="/" component={Home} />
        </Switch>
        {props.children}
      </Router>
    </LoadingWrapper>
  );
};

export default AppRouter;
