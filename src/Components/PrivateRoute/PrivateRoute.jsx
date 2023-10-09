/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <p className="h-screen text-center mt-72 text-3xl font-bold">Page Loading...</p>
    }

    if(user){
return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;