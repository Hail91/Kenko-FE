import React from "react";
import "./app.css";
// Import client side Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Component imports
import RegistrationPage from "../smart/registration/RegistrationPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/register">
          <RegistrationPage />
        </Route>
      </div>
    </Router>
  );
}
// Export Application
export default App;
