import {configureStore} from '@reduxjs/toolkit'
import contactListReducer from './contactListSlice'
import contactReducer from './contactSlice'
import lastVisitedReducer from './lastVisitedSlice'
import searchListReducer from './searchListSlice'


export const store = configureStore({
    reducer: {
        contactList: contactListReducer,
        singleContact: contactReducer,
        lastVisited: lastVisitedReducer,
        searchList: searchListReducer
    }
})

export type RootState= ReturnType<typeof  store.getState>;
export type AppDispatch = typeof store.dispatch
