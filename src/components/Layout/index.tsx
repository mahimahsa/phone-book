import React from 'react';
import {Outlet} from 'react-router-dom'
import '../../assets/css/main.css';
import '../../assets/css/style.css';
import LastVisited from "../LastVisited";
import Search from "../Search";
import useWindowDimensions from "../../utilities/useWindowDimensions";
import { Contact }  from "../../models/interface";
import {useSelector, useDispatch} from "react-redux";
import {RootState, AppDispatch} from "../../store";
import {loadingVisitedContacts} from "../../store/lastVisitedSlice";
import Cookies from 'universal-cookie';


const Layout  :React.FC = ()=>{

    const {width}= useWindowDimensions();
    const lastVisitedResponse : Contact[]= useSelector((state :RootState)=> state.lastVisited);
    const dispatch= useDispatch<AppDispatch>();
    const cookie = new Cookies();
    let visitedList :Contact[]= cookie.get('visitedArray');



    const contactAction=  async ()=>{
        dispatch( await loadingVisitedContacts(visitedList));
    }

    if(lastVisitedResponse?.length === 0){
        if(visitedList?.length >0){
            contactAction();
        }
    }


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
        </div>
    )
}
export default Layout