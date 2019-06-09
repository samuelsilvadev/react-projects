import React from 'react';
import { renderRoutes } from 'react-router-config';

import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

export const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
    {
        path: '/users',
        component: UsersListPage,
        loadData: UsersListPage.loadData,
    },
];

export function Routes() {
    return (
        <div>
            { renderRoutes(routes) }
        </div>
    )
}