import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "./Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const location = useLocation();
  const {user, loading} = useContext(AuthContext);

  if(loading){
    return <Loading></Loading>
  }
  if(user) {
    return children
  }

  return (
    <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
  )

 
};

export default PrivateRoute;