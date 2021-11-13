import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { State } from "../../state/State";
import { ICustomRoute } from "../../interfaces";

const PublicRoute: React.FC<ICustomRoute> = ({ component, exact, path }) => {
  const { AUTH_STATE } = useContext(State);

  const routeComponent = (props: any) =>
    AUTH_STATE.Auth ? (
      <Redirect to={{ pathname: "/" }} />
    ) : (
      React.createElement(component, props)
    );

  return <Route exact={exact} path={path} render={routeComponent} />;
};

export default PublicRoute;
