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

    const imgStyle= {
        background: `url(${contact.avatar}) center -1px / 33px no-repeat`,
    }

    return (
        <Link to={"/my-contact?"+contact.id} >
            <div className='frs-glnc-div ' >
                <div className="glance-div mahsa-row">
                    <div className='col-t-2 col-tm-3 col-m-3'>
                            <div className="avatar" style={imgStyle} >
                            </div>
                    </div>
                    <div className='col-t-13 col-tm-12 col-m-11'>
                        <div className="mahsa-row margin-text">
                            <div className= "col-t-7 col-tm-10 col-m-10" >
                                {contact.name}
                            </div>
                            <div className= "col-t-9 col-tm-15 col-m-15" >
                                {contact.phone}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default FirstGlanceCon

