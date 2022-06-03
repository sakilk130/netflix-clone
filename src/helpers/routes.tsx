import { Navigate, Outlet } from "react-router-dom";

export const IsUserRedirect = ({ user, loggedInPath }: any) => {
  return !user ? <Outlet /> : <Navigate to={loggedInPath} />;
};

export const ProtectedRoute = ({ user, path }: any) => {
  return user ? <Outlet /> : <Navigate to={path} />;
};
