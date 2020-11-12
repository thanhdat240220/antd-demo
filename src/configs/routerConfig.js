import React from 'react';

import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import LoginLayout from '../layouts/LoginLayout/LoginLayout';

const DashboardPage = React.lazy(() => import('../pages/Dashboard/Dashboard'));
const TablesPage = React.lazy(() => import('../pages/Tables/Tables'));
const LoginPage = React.lazy(() => import('../pages/Login/Login'));
const PageNotFound = React.lazy(() => import('../pages/_404/404'));


export const routesMain = [
    {
        path: '/',
        component: DashboardPage,
        layout: AdminLayout,
        isExtra: true,
    },
    {
        path: '/login',
        component: LoginPage,
        isExtra: true,
        layout: LoginLayout,
        isPublic: true
    },
    {
        path: '/dashboard',
        component: DashboardPage,
        isExtra: true,
        layout: AdminLayout,
    },
    {
        path: '/tables',
        component: TablesPage,
        isExtra: true,
        layout: AdminLayout,
    },
    {
        name: 'Analyst',
        path: '/analyst',
        component: TablesPage,
        isExtra: true,
        layout: AdminLayout,
    },
    {
        path: '/*',
        component: PageNotFound,
        layout: LoginLayout
    },
];

