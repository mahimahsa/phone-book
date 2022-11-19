import React from 'react';
import { useSelector} from "react-redux";
import { RootState} from "../../store";

import { InitialStateList} from "../../models/interface";
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
                    <h3>Sorry there is a problem! We could not find your searched contact</h3>
                </>
            )
        }
    }

}
export default Search