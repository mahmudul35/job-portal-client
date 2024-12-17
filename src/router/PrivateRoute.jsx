import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
const PrivateRoute = ({ children }) => {
  const { user, loading } = React.useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
