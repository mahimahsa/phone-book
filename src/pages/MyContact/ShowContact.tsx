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
    const imgStyle= {
        background: `url(${contact.avatar}) center -1px / 52px no-repeat`,
        width: '52px',
        height: '52px'
    }



    useEffect(()=>{
        async function actionCall() {
            await contactAction();
        }
        actionCall();

    },[])



    return (
            <div className='frs-glnc-div ' >
                <div className="title-component" style={{marginTop: '3%'}}>My Contact</div>
                <div className="single-contact">
                <div className="mahsa-row">
                    <div className= "col-t-2 col-tm-2 col-m-2 mrg"  >
                        <div className="avatar" style={imgStyle} >
                        </div>
                    </div>
                </div>
                <div className="mahsa-row mrg">
                    <div className= "col-t-2 col-tm-2 col-m-14 my-con-title " >
                        Name
                    </div>
                    <div className= "col-t-13 col-tm-13 col-m-15" >
                        {contact.name}
                    </div>
                </div>
                <div className="mahsa-row mrg">
                    <div className= "col-t-2 col-tm-2 col-m-14 my-con-title " >
                        Phone
                    </div>
                    <div className= "col-t-13 col-tm-13 col-m-15" >
                        {contact.phone}
                    </div>
                </div>
                <div className="mahsa-row mrg">
                    <div className= "col-t-2 col-tm-2 col-m-14 my-con-title " >
                        Telegram
                    </div>
                    <div className= "col-t-13 col-tm-13 col-m-15" >
                        {contact.telegram}
                    </div>
                </div>
                <div className="mahsa-row mrg">
                    <div className= "col-t-2 col-tm-2 col-m-14 my-con-title " >
                        Email
                    </div>
                    <div className= "col-t-13 col-tm-13 col-m-15" >
                        {contact.email}
                    </div>
                </div>
                <div className="mahsa-row mrg">
                    <div className= "col-t-2 col-tm-2 col-m-14 my-con-title " >
                        Address
                    </div>
                    <div className= "col-t-13 col-tm-13 col-m-15" >
                        {contact.address}
                    </div>
                </div>
                <div className="mahsa-row mrg">
                    <div className= "col-t-2 col-tm-2 col-m-14 my-con-title " >
                        Company
                    </div>
                    <div className= "col-t-13 col-tm-13 col-m-15" >
                        {contact.company}
                    </div>
                </div>
                <div className="mahsa-row mrg">
                    <div className= "col-t-2 col-tm-2 col-m-14 my-con-title " >
                        Note
                    </div>
                    <div className= "col-t-13 col-tm-13 col-m-15" >
                        {contact.note}
                    </div>
                </div>
                <div className="mahsa-row mrg">
                    <div className= "col-t-2 col-tm-2 col-m-14 my-con-title " >
                        Created At
                    </div>
                    <div className= "col-t-13 col-tm-13 col-m-15" >
                        {contact.createdAt}
                    </div>
                </div>
                <div className="mahsa-row mrg">
                    <div className= "col-t-2 col-tm-2 col-m-14 my-con-title " >
                        Updated At
                    </div>
                    <div className= "col-t-13 col-tm-13 col-m-15" >
                        {contact.updatedAt}
                    </div>
                </div>
                </div>


            </div>
    )
}
export default ShowContact

