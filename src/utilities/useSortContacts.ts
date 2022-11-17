import React from 'react';
import {Contact} from "../models/interface";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {alphabet} from '../assets/files/alphabet';

const contactResponse : Contact[]= useSelector((state :RootState)=> state?.contactList?.contacts);


export const sortContacts= ()=>{
    let allContact= contactResponse;
/*    alphabet[0].keys().map((letter, index)=>{
        allContact?.map((contact)=>{
            if(contact.name.toUpperCase().startsWith(letter)){
                let
            }
        })
    })*/

}