import React from 'react';
import {Contact} from '../../models/interface';
import "../../assets/css/style.css";
import { Link} from 'react-router-dom';
import FirstLookContact from './FirstLookContact'


interface Props {
    contact: Contact,
}



const FirstGlanceCon : React.FC<Props> = ({contact})=>{

    const imgStyle= {
        background: `url(${contact.avatar}) center -1px / 33px no-repeat`,
    }


    return (
        <>
            <Link to={"/my-contact?"+contact.id} className="link-hover">
                <div className='' >
                   <FirstLookContact contact={contact} />
                </div>
            </Link>
        </>

    )
}
export default FirstGlanceCon

