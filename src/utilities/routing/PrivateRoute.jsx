import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        /* We'll have to store an authenticated user on login in Redux state
        And then check for an isAuthenticated field to determine whether the user is authorized to view the route.
        But for now, we'll use localStorage to simulate behavior until we integrate Redux
        */
        localStorage.getItem("isAuthenticated") ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};
// Export for use in App
export default PrivateRoute;
