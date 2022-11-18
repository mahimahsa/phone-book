import {createSlice, createAsyncThunk, createAction, PayloadAction} from '@reduxjs/toolkit';
import {Contact, InitialState, InitialStateList} from '../models/interface';
import axios from 'axios';
import {URLs} from '../utilities/enums'


const initCon : Contact=
    {
        name: "",
        email: "",
        gender: "",
        phone: "",
        note: "",
        telegram: "",
        avatar: "",
        company: "",
        address: "",
        createdAt: "",
        updatedAt: "",
        id: 0
    }

const initState : InitialState= {contact: initCon, isLoading: false, hasError: false};

let baseUrl= "http://localhost:1337/passenger"
export const getContact = createAsyncThunk(

"contactList/getContacts",
    async (urlParam:string) => {

        console.log(urlParam);
        try {
            const response = await axios.get(
                urlParam
            );
            console.log(response);
           return response.data

        } catch (error) {
            console.error(error);
        }
    });



const contactSlice = createSlice(
    {
        name: "singleContact",
        initialState: initState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(getContact.pending, (state, action) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(getContact.fulfilled, (state, action) => {
                    state.contact=action.payload;
                    state.isLoading = false;
                    state.hasError = false;
                    console.log(action.payload);
                })
                .addCase(getContact.rejected, (state, action) => {
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