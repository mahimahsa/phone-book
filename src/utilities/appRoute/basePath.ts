
import { AppRouteProps } from '../../models/interface';
import {
    Home,
    Search,
    MyContact}
    from './basePages';


export const RouteList: AppRouteProps[] = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/search',
        element: Search,
    },
    {
        path: '/my-contact',
        element: MyContact,
    }
]
