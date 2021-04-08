import React from "react";
import "./app.css";
// Import client side Routing
import { BrowserRouter as Router, Route } from "react-router-dom";
// Component imports
import LoginPage from "../smart/login/LoginPage";
import RegisterPage from "../smart/registration/RegistrationPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </div>
    </Router>
  );
}
// Export Application
export default App;
