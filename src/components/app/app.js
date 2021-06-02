import React from "react";
// Default Styles
import "./app.css";
// Import client side Routing
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
// Component imports
import LoginPage from "../smart/login/LoginPage";
import RegisterPage from "../smart/registration/RegistrationPage";
import Main from "../smart/dashboard/Main";
// Utility Imports
import PrivateRoute from "../../utilities/routing/PrivateRoute";
// Redux imports
import { connect } from "react-redux";
function App(props) {
  // Need to write logic to fetch the current user from Redux when App loads in
  // Then figure out whether or not they are authenticated and use that to decide what is accessible from top level down
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <PrivateRoute isAuthenticated={true} path="/dashboard/home">
          <Main />
        </PrivateRoute>
      </div>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authentication.currentUser.isAuthenticated,
  };
};
export default connect(mapStateToProps)(App);
