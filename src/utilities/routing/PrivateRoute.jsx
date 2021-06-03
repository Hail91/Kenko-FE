import React from "react";
import { Redirect, Route } from "react-router";
// Redux imports
import { connect } from "react-redux";

const PrivateRoute = (props) => {
  if (!props.isAuth) {
    return <Redirect to="/login" />;
  } else return <Route {...props} />;
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.authentication.currentUser.isAuthenticated,
  };
};
// Export for use in App
export default connect(mapStateToProps)(PrivateRoute);
