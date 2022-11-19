import React, {useEffect, useState} from 'react'
import {Contact} from "../../models/interface";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import FirstGlanceCon from "../FirstGlanceCon";

const LastVisited : React.FC = ()=>{

    const lastVisitedResponse : Contact[]= useSelector((state :RootState)=> state.lastVisited)
    const [visitedList , setVisitedList]= useState<Contact[]>([]);

   useEffect(()=>{
console.log(lastVisitedResponse);

       let counter : number= lastVisitedResponse?.length
       let reversedArr: Contact[]= [];
       for(let i =counter-1; i>=0; i-- ){
           reversedArr.push(lastVisitedResponse[i]);
       }
       setVisitedList(reversedArr)
    })


    if (visitedList?.length != 0) {
        return (
            <>
                <div className='home-container visited-div'>
                    <div className="title-component">Last Visited</div>
                    {
                        visitedList?.map((item) => <FirstGlanceCon contact={item}/>)
                    }
                </div>
            </>
        )
    } else {
        return (
            <div className='home-container visited-div'>
                <div className="title-component">Last Visited</div>
                <h3 className="title-existence">You not visit any contact so far!</h3>
            </div>
        )
    }


}
export default LastVisited