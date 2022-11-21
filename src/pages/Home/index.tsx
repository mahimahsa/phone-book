import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getContacts} from "../../store/contactListSlice";
import {Contact} from "../../models/interface";
import ContactList from "./ContactList";
import Cookies from 'universal-cookie';
import useWindowDimensions from "../../utilities/useWindowDimensions";
import LastVisited from "../../components/LastVisited";
import {sortContactList} from "../../utilities/sortContactList";
import {initCon} from "../../utilities/initCon";




const Home :React.FC = ()=>{
    const dispatch= useDispatch<AppDispatch>();
    const contactResponse : [string, Contact[]][]= useSelector((state :RootState)=> state.contactList.contacts)
    const {width}= useWindowDimensions();
    const [contactAZlist, setContactAZlist]= useState<[string, Contact[]][]>([['', [initCon]]]);

    const contactAction = async () => {
        dispatch(await getContacts(""));
    }

    useEffect(() => {
        async function actionCall() {
            await contactAction();
        }
        actionCall();

    },[])
    useEffect(()=>{
        if(contactResponse?.length<1){
            const cookie= new Cookies;
            cookie.set('visitedArray', []);
        }
    },[]);


/*    useEffect(()=>{
        if(contactResponse?.length>1 && contactAZlist.length <2){
            console.log(contactAZlist.length)
            console.log(contactAZlist)
           setContactAZlist([['', [initCon]]]);
            setContactAZlist(sortContactList(contactResponse));
            console.log(contactAZlist)
        }
    },[contactResponse])*/



    if(width<1000){
        return (
            <>
                <LastVisited />
                {
                    contactResponse?.length> 2 &&
                    <ContactList contacts={contactResponse} />
                }
            </>
        )
    }else {
        return (
            <>
                {
                    contactResponse?.length > 2 &&
                    <ContactList contacts={contactResponse}/>

                }
            </>
        )
    }
}
export default Home