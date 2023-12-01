import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

// const Protected = ({ isLoggedIn, children }) => {
const ProtectedRoute = ({ children , ...rest }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
{console.log(children);}
  return (
    <>
      {!loading && (
        <Routes>
          <Route
            {...rest}
            render={(props) => {
           

              return children;
            }}
          />
        </Routes>
      )}
    </>
  );
};

export default ProtectedRoute;

// <Routes>

// </Routes>

// if (!isAuthenticated) {
//   return <Navigate to="/login" />;
// }