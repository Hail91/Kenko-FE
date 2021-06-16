import React, { useEffect } from "react";
import axios from "axios";
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

function App() {
  const fetchCsrf = async () => {
    let response = await axios.get("http://localhost:8000/api/auth/csrf");
    axios.defaults.headers.common["X-CSRF-Token"] = response.csrfToken;
  };
  useEffect(() => {
    fetchCsrf();
  }, []);

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
        <PrivateRoute path="/dashboard" component={Main} />
      </div>
    </Router>
  );
}
export default App;
