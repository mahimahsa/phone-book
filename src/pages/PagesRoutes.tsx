import React from 'react';
import {Routes, Router, Route} from 'react-router-dom'
import {Pathes} from '../utilities/enums';
import {appRoutes} from '../utilities/app.routes';




const PagesRoutes : React.FC = ()=>{

    return(
            <Routes>
                <Route path={Pathes.Home} element={<appRoutes.Home />} />
            </Routes>
    )
}
export  default PagesRoutes