import React from "react";
import { Route } from "react-router-dom";
import * as authService from "../services/authService";
export default ProtectedRoute;

const ProtectedRoute = (path, component, render, ...rest) => {
  return (
    <Route>
      {...rest}
      render ={" "}
      {props => {
        if (!authService.getCurrentUser()) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            ></Redirect>
          );
        }
        return component ? <component {...props} /> : render(props);
      }}
    </Route>
  );
};

export default ProtectedRoute;
