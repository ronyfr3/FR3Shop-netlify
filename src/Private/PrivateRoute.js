import React from "react";
import { Route, Redirect } from "react-router-dom";

export const UserRoute = ({
  component,
  path,
  ...rest
}) => {
  const currentUser =localStorage.getItem("isAuthenticated")

  return currentUser === true ? (
    <Route exact path={path} component={component} {...rest} />
  ) : (
      <Redirect to={"/"} />
    );
};