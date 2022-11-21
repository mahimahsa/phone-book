import React from 'react';
import {Contact} from "../../models/interface";
import HomeFirstLook from "../../components/FirstGlanceCon/HomeFirstLook";


interface Props {
    contacts: [string, Contact[]][],
}

const ContactList :React.FC<Props> = ({contacts})=>{
    return (
        <>
            {
                contacts?.map((alphabetContactList)=>
                    <div className="home-contacts-div">
                        <div className="letter">{alphabetContactList[0]}</div>
                        <div className="letter-border">
                            {alphabetContactList[1]?.map((item) =>
                                <HomeFirstLook contact={item} />)}
                        </div>
                    </div>
                )

            }
        </>
    )
}
export default ContactList