import {createSlice, createAsyncThunk, createAction, PayloadAction} from '@reduxjs/toolkit';
import {Contact, InitialState} from '../models/routes';
import axios from 'axios';
import {URLs} from '../utilities/enums'



const initlState : InitialState= {contacts:[], isLoading: false, hasError: false};


export const getContacts = createAsyncThunk(
    "contactList/getContacts",
    async () => {
        try {
            const response = await axios.get(
                URLs.limitedPassengers
            );
            return response.data.items;
        } catch (error) {
            console.error(error);
        }
    });


const contactSlice = createSlice(
    {
    name: "contactList",
    initialState: initlState,
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
                console.log(action.payload);
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


export default contactSlice.reducer;