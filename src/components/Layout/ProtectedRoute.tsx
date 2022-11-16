import React from 'react';
import {Route , Navigate} from "react-router-dom";
import Layout from "./index";


export type ProtectedRouteProps = {
   // isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
};

const ProtectedRoute :React.FC<ProtectedRouteProps> = ({ authenticationPath, outlet}: ProtectedRouteProps)=>{

    if(1) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: authenticationPath }} />;
    }
}


export default ProtectedRoute