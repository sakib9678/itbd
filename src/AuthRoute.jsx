import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const accessToken = localStorage.getItem("affiliateToken");
  const isLoggedIn = !!accessToken;

  if (isLoggedIn) {
    return <Navigate to="/affiliate-dashboard" replace />;
  }

  return children;
};

export default AuthRoute;
