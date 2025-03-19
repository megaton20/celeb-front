// import { useContext, useEffect } from "react";
// import { AuthContext } from "./AuthContext";
// import { useNavigate, Outlet, Navigate } from "react-router-dom";

    
// const ProtectedRoute = ()=>{

//   const { passedUser } = useContext(AuthContext);
//   console.log(useContext(AuthContext));

//   return passedUser ? <Outlet/> : <Navigate to="/login"/>
// }

// export default ProtectedRoute;


import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    console.error("❌ ProtectedRoute: AuthContext is null! Make sure AuthProvider is wrapping the app.");
    return <Navigate to="/login" />;
  }

  const { passedUser, loading } = authContext;

  if (loading) return <div>Loading...</div>; // Prevent redirecting before data loads

  return passedUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

