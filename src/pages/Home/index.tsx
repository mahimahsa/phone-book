import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getContacts} from "../../store/contactSlice";
import {Contact} from "../../models/routes";


const Home :React.FC = ()=>{
    const dispatch= useDispatch<AppDispatch>();
    const contactResponse : Contact[]= useSelector((state :RootState)=> state.contactList.contacts)

    const contactAction = async () => {
        dispatch(await getContacts());
        contactResponse?.map((item) =>console.log(item));
        console.log(contactResponse)
    }
    useEffect(() => {

        async function test2() {
            await contactAction();
        }
        contactResponse?.length<2 &&
        test2();

    },[contactResponse?.length])

    return (
        <>
        <h1>Welcome to HOme Page</h1>
        {
            contactResponse?.map((item) =>
                <div>
                    <span>name: {item.name}</span>
                    <div style={{display: 'inline', padding: '7px, 30px'}}>.</div>
                    <span>phone: {item.phone}</span>
                </div>
            )
        }
        </>
    )
}
export default Home