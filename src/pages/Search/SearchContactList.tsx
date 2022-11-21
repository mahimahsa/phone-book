import React from 'react';
import {Contact} from "../../models/interface";
import FirstGlanceCon from "../../components/FirstGlanceCon";


interface Props {
    contactList: Contact[],
}

const SearchContactList :React.FC<Props> = ({contactList})=>{
    return (
        <>
            {
                contactList?.map((item) =>
                    <FirstGlanceCon contact={item} />
                )
            }
        </>
    )
}
export default SearchContactList;