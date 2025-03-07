import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Get auth state

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
