import React from 'react';
import { renderRoutes } from 'react-router-config';

import Home from './components/Home';
import UsersList from './components/UsersList';

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/users',
        component: UsersList,
        loadData: UsersList.loadData, 
    },
];

export function Routes() {
    return  (
        <div>
            { renderRoutes(routes) }
        </div>
    )
}