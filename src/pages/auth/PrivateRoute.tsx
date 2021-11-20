import { ReactElement, ReactNode, useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../store/AuthProvider";

interface RouteProps {
  children: ReactNode;
  redirectTo: string;
}

const PrivateRoute: React.FC<RouteProps> = ({ children, redirectTo }) => {
  const { user } = useContext(AuthContext);

  return user ? <>{children}</> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
