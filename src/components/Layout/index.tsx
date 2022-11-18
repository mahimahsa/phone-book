import React from 'react';
import {Outlet} from 'react-router-dom'
import '../../assets/css/main.css';
import LastVisited from "../LastVisited";



const Layout  :React.FC = ()=>{

    return (
        <div>
        <div ></div>
            <div className="mahsa-row" style={{maxWidth: '1000px', background: '#eee'}}>
                <div className="col-t-5" style={{background: "purple"}}>
                    <LastVisited/>
                </div>
                <div className="col-t-1"></div>
                <div className="col-t-10" style={{background: "pink"}}>
                    <Outlet/>
                </div>
            </div>
        <div></div>
        </div>
    )
}
export default Layout