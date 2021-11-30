import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { TodoContext } from "../../store/TodoProvider";
import { auth } from "../../utils/firebase";

interface RouteProps {
  children: ReactNode;
  redirectTo: string;
}

const PrivateRoute: React.FC<RouteProps> = ({ children, redirectTo }) => {
  const { user } = useContext(TodoContext);

  return user ? <>{children}</> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
