import React from 'react';
import {Outlet} from 'react-router-dom'
//import 'src/assets/css/main';
import Loading from "../Loading";
import WholeList from "../WholeList";
import Search from "../Search";



interface Props{
    outlet: JSX.Element;
};


const Layout  :React.FC = ()=>{


    return (
        <>
            <h1>Welcome to Layout Page</h1>
            <Outlet />
        </>
    )
}
export default Layout