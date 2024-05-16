import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }: any) {
  const { currentUser, loading } = useAuth();

  if (loading == false) {
    return currentUser ? children : <Navigate to="/signup" />;
  }
}
