// ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated, getAuthToken } from '../services/auth_utility';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = isAuthenticated();
  const token = getAuthToken();

  if (!isAuth) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Clone the child element and add the token as a prop
  return React.cloneElement(children, {
    authToken: token
  });
};

export default ProtectedRoute;