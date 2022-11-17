import {configureStore} from '@reduxjs/toolkit'
import contactListReducer from './contactListSlice'
import contactReducer from './contactSlice'


export const store = configureStore({
    reducer: {
        contactList: contactListReducer,
        singleContact: contactReducer
    }
})

export type RootState= ReturnType<typeof  store.getState>;
export type AppDispatch = typeof store.dispatch
