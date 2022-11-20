import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getContact} from "../../store/contactSlice";
import {Contact} from "../../models/interface";
import {useLocation, useNavigate} from "react-router";
import ShowContact from "./ShowContact";


const MyContact :React.FC = ()=>{
    const dispatch= useDispatch<AppDispatch>();
    const globalLocation= useLocation();
    const urlParam= globalLocation?.search?.substr(1, globalLocation?.search?.length -1);
    const SingleContactResponse : Contact= useSelector((state :RootState)=> state.singleContact.contact)

    const contactAction = async () => {
        dispatch(await getContact("http://localhost:1337/passenger/"+urlParam));
    }

    useEffect(() => {
        async function actionCall() {
            await contactAction();
        }
        actionCall();

    },[SingleContactResponse?.name?.length])

    const nav= useNavigate()
    const navigateBack= ()=>{
        nav("/")
    }

    return (
        <>
            <button onClick={navigateBack} className="back-button">Back To The Home Page</button>
            { SingleContactResponse?.name?.length>0 &&
                <ShowContact contact={SingleContactResponse}/>
            }
        </>
    )
}
export default MyContact