import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  const authenticated = () => {
    if (isAuthenticated === false) {
      return <Navigate to="/login" />;
    }
    if (isAdmin === true && user.role !== "admin") {
      return <Navigate to="/login" />;
    }
    return <Outlet />;
  };

  return <>{loading === false && authenticated(isAdmin)}</>;
};

export default ProtectedRoute;
