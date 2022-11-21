import React from 'react';
import { useSelector} from "react-redux";
import { RootState} from "../../store";

import { InitialStates} from "../../models/interface";
import SearchContactList from "./SearchContactList";


const Search :React.FC = ()=>{

    const searchResponse : InitialStates= useSelector((state :RootState)=> state.searchList);
console.log(searchResponse)
    if(searchResponse?.contacts?.length>0){
        return(
            <SearchContactList contactList={searchResponse?.contacts} />
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