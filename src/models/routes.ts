import {Pathes} from '../utilities/enums'
import {appRoutes} from '../utilities/app.routes'

export interface AppRoutesProps {
    path: Pathes,
    component: typeof appRoutes
}

export interface Contact {
    name: string,
    email: string,
    gender: string,
    phone: string,
    note: string,
    telegram: string,
    avatar: string,
    company: string,
    address: string,
    createdAt: Date,
    updatedAt: Date,
    id: number
}
export interface InitialState {
    contacts: Contact[],
    isLoading: boolean,
    hasError: boolean
}