import React from "react";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />; // redirect logged-out users
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

    if (payload.role !== "admin") {
      return <Navigate to="/" />; // redirect non-admins
    }

    return children;
  } catch {
    return <Navigate to="/" />;
  }
}

export default AdminRoute;
