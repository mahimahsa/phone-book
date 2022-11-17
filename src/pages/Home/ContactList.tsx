import React from 'react';
import {Contact} from "../../models/interface";
import FirstGlanceCon from "../../components/FirstGlanceCon";


interface Props {
    contacts: Contact[],
}

const ContactList :React.FC<Props> = ({contacts})=>{
    return (
        <>
            {
                contacts?.map((item) =>
                    <FirstGlanceCon contact={item} />
                )
            }
        </>
    )
}
export default ContactList