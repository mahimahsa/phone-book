import {createSlice,  PayloadAction} from '@reduxjs/toolkit';
import {Contact} from '../models/interface';
import Cookies from 'universal-cookie';



const initState : Contact[]= [];

const lastVisitedSlice = createSlice(
    {
        name: "lastVisitedSlice",
        initialState: initState,
        reducers: {
            loadingVisitedContacts: (state, action: PayloadAction<Contact[]>)=>{
                state= action.payload;
                return state;
            },
            getVisitedContacts: (state , action :PayloadAction<Contact>)=>{
                if(action.payload?.name?.length> 1) {
                    const cookie = new Cookies();
                    let visitedList :Contact[]= cookie.get('visitedArray');
                    let indx : number=  visitedList?.length;
                    if(visitedList[indx-1]?.name == action?.payload?.name){
                            return state;
                    }
                    if (visitedList?.length <4) {
                            visitedList?.push(action.payload);
                            cookie.set("visitedArray", visitedList, {path :"/" , maxAge : 360000000000})
                            return state =visitedList;

                    }
                    if (visitedList.length == 4  ) {
                            visitedList?.shift();
                            visitedList?.push(action.payload);
                            cookie.set("visitedArray", visitedList, {path :"/" , maxAge : 360000000000});
                            return state = visitedList;
                    }
                } else
                    return state
            }
        },
    });







export const {getVisitedContacts, loadingVisitedContacts} = lastVisitedSlice.actions;
export default lastVisitedSlice.reducer;