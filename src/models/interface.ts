import React from 'react';
import {initCon} from "../utilities/initCon";
export interface AppRouteProps {
    path: string
    element: React.FC
}


export interface Contact {
    id: number,
    name: string,
    email: string,
    gender: string,
    phone: string,
    note: string,
    telegram: string,
    avatar: string,
    company: string,
    address: string,
    createdAt: string,
    updatedAt: string,
}
export interface InitialStateList {
    contacts: [string , [Contact]][],
    isLoading: boolean,
    hasError: boolean
}
export interface InitialStates {
    contacts: Contact[],
    isLoading: boolean,
    hasError: boolean
}
export interface InitialState {
    contact: Contact,
    isLoading: boolean,
    hasError: boolean
}