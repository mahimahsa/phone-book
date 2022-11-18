import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";

import {Contact, InitialStateList} from "../../models/interface";
import ContactList from "../Home/ContactList";


const Search :React.FC = ()=>{

    const searchResponse : InitialStateList= useSelector((state :RootState)=> state.searchList);

    if(searchResponse?.contacts?.length>0){
        return(
            <ContactList contacts={searchResponse?.contacts} />
        )
    }else {
        if(searchResponse?.isLoading){
            return (
                <>
                    <h1>Please Waite</h1>
                </>
            )
        }else {
            return (
                <>
                    <h1>Sorry there is a problem! We could not find your searched contact</h1>
                </>
            )
        }
    }

}
export default Search