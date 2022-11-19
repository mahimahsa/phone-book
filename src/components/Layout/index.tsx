import React from 'react';
import {Outlet} from 'react-router-dom'
import '../../assets/css/main.css';
import '../../assets/css/style.css';
import LastVisited from "../LastVisited";
import Search from "../Search";
import useWindowDimensions from "../../utilities/useWindowDimensions";



const Layout  :React.FC = ()=>{

    const {width}= useWindowDimensions();

    return (
        <div>
            <div className="mahsa-row" >
                {
                    width>1000 ?
                        <>
                            <div className="col-t-6">
                                <LastVisited/>
                            </div>
                            <div className="col-t-9">
                                <Search/>
                                <Outlet/>
                            </div>
                        </>
                        :
                        <>
                            <div className="col-tm-15 col-m-15" >
                                <Search/>
                            </div>
                            <div className="col-tm-15 col-m-15" >
                                <Outlet/>
                            </div>
                        </>
                }
            </div>
        <div></div>
        </div>
    )
}
export default Layout