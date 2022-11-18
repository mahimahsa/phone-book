import React from 'react';
import {Outlet} from 'react-router-dom'
import '../../assets/css/main.css';
import LastVisited from "../LastVisited";
import Search from "../Search";



const Layout  :React.FC = ()=>{

    return (
        <div>
        <div ></div>
            <div className="mahsa-row" style={{maxWidth: '1000px', background: '#eee'}}>
                <div className="col-t-6" style={{background: "purple"}}>
                    <LastVisited/>
                </div>
                <div className='col-t-1'></div>
                <div className="col-t-9" style={{background: "pink"}}>
                    <Search />
                    <Outlet/>
                </div>
            </div>
        <div></div>
        </div>
    )
}
export default Layout