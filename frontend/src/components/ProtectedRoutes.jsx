import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoggedContext from "../main";

const ProtectedComponent = ({ children }) => {
  const { isLogin } = useContext(LoggedContext);

  if (!isLogin) {
    return <Navigate to="/googleauth" replace />; // Redirect to Google Auth on unauthorized access
  }

  return children;
};

export default ProtectedComponent;
