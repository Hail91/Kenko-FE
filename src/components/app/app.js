import React from "react";
// Default Styles
import "./app.css";
// Import client side Routing
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
// Component imports
import LoginPage from "../smart/login/LoginPage";
import RegisterPage from "../smart/registration/RegistrationPage";
import Main from "../smart/dashboard/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Redirect to="/register" />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/dashboard/home">
          <Main />
        </Route>
      </div>
    </Router>
  );
}
// Export Application
export default App;
