import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Contact, InitialStateList} from '../models/interface';
import axios from 'axios';
import {URLs} from '../utilities/enums'


const initStateList : InitialStateList= {contacts:[], isLoading: false, hasError: false};


let baseUrl= "http://localhost:1337/passenger";
export const getContacts = createAsyncThunk(

"contactList/getContacts",
    async (urlParam:string) => {
        let url= baseUrl+urlParam;
        try {
            const response = await axios.get(
                url
            );
            if(urlParam === "")
            {return response.data.items;}
            else {return response.data}

        } catch (error) {
            console.error(error);
        }
    });


const contactsSlice = createSlice(
    {
    name: "contactList",
    initialState: initStateList,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getContacts.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(getContacts.fulfilled, (state, action) => {
                state.contacts= [];
                state.contacts=action.payload;
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(getContacts.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })
    }
});


/*// Selectors
export const selectCompanies = state => state.companyList.company;
export const selectLoadingState = state => state.companyList.isLoading;
export const selectErrorState = state => state.companyList.hasError;*/


export default contactsSlice.reducer;
