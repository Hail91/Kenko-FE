import React from "react";
import { Redirect, Route } from "react-router";
// Redux imports
import { connect } from "react-redux";

const PrivateRoute = (props) => {
  if (!props.isAuth && !window.localStorage.getItem("store")) {
    return <Redirect to="/login" />;
  } else return <Route {...props} />;
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.authentication.currentUser.isAuthenticated,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
