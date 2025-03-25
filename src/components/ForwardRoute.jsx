


import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const ForwardRoute = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    console.error(" ForwardRoute: AuthContext is null! Make sure AuthProvider is wrapping the app.");
    return <Navigate to="/auth/login" />;
  }

  const { passedUser, loading } = authContext;

  if (loading) return <div>Loading...</div>; // Prevent redirecting before data loads

  return !passedUser ? <Outlet /> : <Navigate to="/admin/dashboard" />;
};

export default ForwardRoute;

