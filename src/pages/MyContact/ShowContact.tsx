import React, {useState, useEffect} from 'react';
import {Contact} from '../../models/interface';
import "../../assets/css/style.css";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";
import {getVisitedContacts} from "../../store/lastVisitedSlice";



interface Props {
    contact: Contact,
}



const ShowContact : React.FC<Props> = ({contact})=>{

    const dispatch= useDispatch<AppDispatch>();
    const contactAction = async () => {
        dispatch(await getVisitedContacts(contact));
    }



    useEffect(()=>{
        async function actionCall() {
            await contactAction();
        }
        actionCall();

    },[])



    return (
            <div className='frs-glnc-div mahsa-row' >
                <span>in show contact</span>
                <div className= "col-t-7 col-tm-15 col-m-15" >
                    {contact.name}
                </div>
                <div className= "col-t-7 col-tm-15 col-m-15" >
                    {contact.phone}
                </div>
                <div className= "col-t-7 col-tm-15 col-m-15" >
                    {contact.address}
                </div>
                <div className= "col-t-7 col-tm-15 col-m-15" >
                    {contact.company}
                </div>
                <div className= "col-t-7 col-tm-15 col-m-15" >
                    {contact.note}
                </div>

            </div>
    )
}
export default ShowContact

