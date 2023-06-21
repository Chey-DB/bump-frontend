import React, {useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";
  import  { useAuth }  from "../Context";

export default function ProtectedRoute({ redirectTo }) {
    const { user } = useAuth();
    

    return user.userId ? <Outlet /> : <Navigate to={redirectTo} />;
}
