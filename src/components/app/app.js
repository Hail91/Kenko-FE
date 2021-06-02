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

function App(props) {
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
        <PrivateRoute
          isAuthenticated={props.isAuthenticated}
          path="/dashboard/home"
        >
          <Main />
        </PrivateRoute>
      </div>
    </Router>
  );
}
// Export Application
export default App;
