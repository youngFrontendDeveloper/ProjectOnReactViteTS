import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
