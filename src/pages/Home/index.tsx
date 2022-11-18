import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getContacts} from "../../store/contactListSlice";
import {Contact} from "../../models/interface";
import ContactList from "./ContactList";
import Cookies from 'universal-cookie';
import Search from "../../components/Search";



const Home :React.FC = ()=>{
    const dispatch= useDispatch<AppDispatch>();
    const contactResponse : Contact[]= useSelector((state :RootState)=> state.contactList.contacts)

    const contactAction = async () => {
        dispatch(await getContacts(""));
    }

    useEffect(() => {

        async function actionCall() {
            await contactAction();
        }
        //contactResponse?.length<2 &&
        actionCall();

    },[])
    useEffect(()=>{
        if(contactResponse?.length<1){
            const cookie= new Cookies;
            cookie.set('visitedArray', []);
        }
    })

    return (
        <>
            {
                contactResponse?.length> 2 &&
                <ContactList contacts={contactResponse} />
            }

        </>
    )
}
export default Home