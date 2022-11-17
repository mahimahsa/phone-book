import React from 'react';
export interface AppRouteProps {
    path: string
    element: React.FC
}

export interface ShortViewContact {
    id: number,
    name: string,
    phone: string,
}

export interface Contact extends ShortViewContact{
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
    contacts: Contact[],
    isLoading: boolean,
    hasError: boolean
}
export interface InitialState {
    contact: Contact,
    isLoading: boolean,
    hasError: boolean
}