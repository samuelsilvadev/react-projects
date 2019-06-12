import React from 'react';
import { renderRoutes } from 'react-router-config';

import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';

export const routes = [
    {
        component: App,
        loadData: App.loadData,
        routes: [
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
            {
                path: '',
                component: NotFoundPage,
            }
        ]
    },
];

export function Routes() {
    return (
        <div>
            { renderRoutes(routes) }
        </div>
    )
}