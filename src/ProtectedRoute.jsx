import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem("affiliateToken");
  const isLoggedIn = !!accessToken;

  if (!isLoggedIn) {
    return <Navigate to="/affiliate-login" replace />;
  }

  return children;
};

export default ProtectedRoute;
