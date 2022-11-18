import React, {useState, useEffect} from 'react';
import {Contact} from '../../models/interface';
import "../../assets/css/style.css";
import {useNavigate, Link} from 'react-router-dom';
import {getContacts} from "../../store/contactListSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";

interface Props {
    contact: Contact,
}



const FirstGlanceCon : React.FC<Props> = ({contact})=>{



    return (
        <Link to={"/my-contact?"+contact.id} >
            <div className='frs-glnc-div mahsa-row' >
                <div className= "col-t-7 col-tm-15 col-m-15" >
                    {contact.name}
                </div>
                <div className= "col-t-7 col-tm-15 col-m-15" >
                    {contact.phone}
                </div>
            </div>
        </Link>
    )
}
export default FirstGlanceCon

