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
                <div className='col-t-3 col-tm-3 col-m-3'>
                    <div className='col-t-14 col-tm-14 col-m-14'>
                        <img style={{width:"36px", height:"36px"}} alt="avatar" src={contact.avatar}/>
                    </div>
                </div>
                <div className='col-t-11 col-tm-11 col-m-11'>
                    <div className="mahsa-row">
                        <div className= "col-t-7 col-tm-10 col-m-10" >
                            {contact.name}
                        </div>
                        <div className= "col-t-7 col-tm-15 col-m-15" >
                            {contact.phone}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default FirstGlanceCon

