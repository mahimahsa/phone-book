import {createSlice,  PayloadAction} from '@reduxjs/toolkit';
import {Contact} from '../models/interface';
import Cookies from 'universal-cookie';



const initState : Contact[]= [];

const lastVisitedSlice = createSlice(
    {
        name: "lastVisitedSlice",
        initialState: initState,
        reducers: {
            getVisitedContacts: (state , action :PayloadAction<Contact>)=>{
                if(action.payload?.name?.length> 1) {
                    const cookie = new Cookies();
                    let visitedList :Contact[]= cookie.get('visitedArray');
                    console.log(visitedList);

                    let indx : number=  visitedList?.length;
                    console.log((visitedList[indx-1]?.name +"  "+ action?.payload?.name));
                    console.log((visitedList[indx-1]?.name == action?.payload?.name));
                    if(visitedList[indx-1]?.name == action?.payload?.name){
                        console.log("in name equally "+JSON.stringify(state));
                        return state;
                    }
                    if (visitedList?.length <4) {
                        visitedList?.push(action.payload);
                        cookie.set("visitedArray", visitedList, {path :"/" , maxAge : 360000000000})
                        console.log("in length <4 "+JSON.stringify(state));
                        return state =visitedList;

                    }
                    if (visitedList.length == 4  ) {
                        visitedList?.shift();
                        visitedList?.push(action.payload);
                        cookie.set("visitedArray", visitedList, {path :"/" , maxAge : 360000000000});
                        console.log("length == 4  "+JSON.stringify(state));
                        return state = visitedList;
                    }
                } else
                    return state
            }
        },
    });

/*// Selectors
export const selectCompanies = state => state.companyList.company;
export const selectLoadingState = state => state.companyList.isLoading;
export const selectErrorState = state => state.companyList.hasError;*/

export const {getVisitedContacts} = lastVisitedSlice.actions;
export default lastVisitedSlice.reducer;