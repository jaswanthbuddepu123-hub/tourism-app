import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const access_token = Cookies.get("Access_Token");
  if (access_token === undefined) {
    return <Navigate to="/signin" replace />;
  } else {
    return children;
  }
};
export default ProtectedRoute;
