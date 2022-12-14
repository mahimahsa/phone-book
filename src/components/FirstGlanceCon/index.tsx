import React from 'react';
import {Contact} from '../../models/interface';
import "../../assets/css/style.css";
import { Link} from 'react-router-dom';
import FirstLookContact from './FirstLookContact'


interface Props {
    contact: Contact,
}



const FirstGlanceCon : React.FC<Props> = ({contact})=>{




    return (
        <>
            <Link to={"/my-contact?"+contact.id} className="link-hover">
                <div className='frs-glnc-div ' >
                   <FirstLookContact contact={contact} />
                </div>
            </Link>
        </>

    )
}
export default FirstGlanceCon

