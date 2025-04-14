import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  // Check if token, username, and password exist
  if (!token || !username || !password) {
    return <Navigate to="/" />; // Redirect to login if authentication fails
  }

  return children; // Render protected content if authentication is successful
};

export default ProtectedRoute;
