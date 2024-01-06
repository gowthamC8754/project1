import React from "react";
import LoginForm from "./LoginForm";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Dashboard from "./DashBoard";

function App() {
  let routes = useRoutes([
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/login", element: <LoginForm /> },
  ]);
  return routes;
}

const APPWrpper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default APPWrpper;
