import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute for both admin and customer
 * @param {ReactNode} children - component(s) to render
 * @param {string} role - allowed role ("admin" or "customer")
 */
const ProtectedRoute = ({ children, role }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!isLoggedIn || user?.role !== role) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;







