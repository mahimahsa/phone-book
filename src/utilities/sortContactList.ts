import {alphabet} from './alphabet';
import {Contact} from "../models/interface";
import {initCon} from '../utilities/initCon'


export const sortContactList = (contactResponse: Contact[])=>{

    let alphabetEntries : [string, Contact[]][]= [["", [initCon]]];
     alphabetEntries = Object.entries< Contact[]>(alphabet)

    let final: typeof alphabetEntries = [];
    if(alphabetEntries[0][1]?.length <1) {
        alphabetEntries.map((A_Z) => {
            contactResponse.map((contact) => {
                if (contact.name?.charAt(0).toUpperCase() === A_Z[0]) {
                    A_Z[1].push(contact);
                }
            })
        })
    }

    alphabetEntries?.map((item)=>{
        if(item[1]?.length !==0) { final.push(item)}
    })

return final


}