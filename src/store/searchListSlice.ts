import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Contact, InitialStateList} from '../models/interface';
import axios from 'axios';
import {URLs} from '../utilities/enums'


const initStateList : InitialStateList= {contacts:[], isLoading: false, hasError: false};


let baseUrl= "http://localhost:1337/passenger";
export const getSearchedContacts = createAsyncThunk(

"searchListSlice/getSearchedContacts",
    async (urlParam:string) => {
        let url= baseUrl+urlParam;
        console.log(url)
        try {
            const response = await axios.get(
                url
            );
            console.log(response.data.items);
            return response.data.items

        } catch (error) {
            console.error(error);
        }
    });


const searchListSlice = createSlice(
    {
    name: "searchContactList",
    initialState: initStateList,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSearchedContacts.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(getSearchedContacts.fulfilled, (state, action) => {

                state.contacts= [];
                state.contacts=action.payload;
                state.isLoading = false;
                state.hasError = false;
                console.log(state.contacts);
                console.log(state.isLoading);
                console.log(state.hasError);
            })
            .addCase(getSearchedContacts.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })
    }
});


/*// Selectors
export const selectCompanies = state => state.companyList.company;
export const selectLoadingState = state => state.companyList.isLoading;
export const selectErrorState = state => state.companyList.hasError;*/


export default searchListSlice.reducer;
