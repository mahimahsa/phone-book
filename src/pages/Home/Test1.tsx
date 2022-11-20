import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getContacts} from "../../store/contactListSlice";
import {Contact} from "../../models/interface";
import ContactList from "./ContactList";
import Cookies from 'universal-cookie';
import useWindowDimensions from "../../utilities/useWindowDimensions";
import LastVisited from "../../components/LastVisited";
import {sortContactList} from "../../utilities/sortContactList";



const Test1 :React.FC = ()=>{
    const contactResponse : Contact[]= useSelector((state :RootState)=> state.contactList.contacts)
/*     useEffect(()=>{
       // sortContactList()
    },[])*/


        return (
            <>
        <h1>Test</h1>
            </>
        )

}
export default Test1