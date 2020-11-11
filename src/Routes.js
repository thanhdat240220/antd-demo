import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

// const HomePage = React.lazy(() => import('./pages/Home/Home'));
// const LoginPage = React.lazy(() => import('./pages/Login/Login'));
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import LoginLayout from './layouts/LoginLayout/LoginLayout';

import Dashboard from './pages/Dashboard/Dashboard';
import LoginPage from './pages/Login/Login';
import PageNotFound from './pages/_404/404';

const routes = [
    {
        path: '/',
        component: Dashboard,
        layout: AdminLayout,
        isExtra: true,
    },
    {
        path: '/home',
        component: Dashboard,
        isExtra: true,
        isPrivate: true,
        layout: AdminLayout
    },
    {
        path: '/login',
        component: LoginPage,
        isExtra: true,
        layout: LoginLayout,
        isPublic: true
    },
    {
        path: '/*',
        component: PageNotFound,
        layout: LoginLayout
    }
];

function Routes(props) {
    const renderRoutes = (routes) => {
        return routes.map((route, index) => {

            const {
                component: Component,
                layout: Layout,
                path,
                isExtra,
                isPublic
            } = route;

            return (
                <Route key={index} path={path} exact={isExtra}
                    render={
                        (props) => {
                            const isAuth = localStorage.getItem('Auth');
                            
                            if (isAuth || isPublic) {
                                return (
                                    <Layout>
                                        <Component />
                                    </Layout>
                                );
                            } else {
                                return (
                                    <Redirect
                                        to={{
                                            pathname: "/login",
                                            state: { from: window.location.pathname }
                                        }}
                                    />
                                )
                            }
                        }
                    }
                />
            );
        });
    }

    return (
        <>
            <Switch>
                {renderRoutes(routes)}
            </Switch>
        </>
    );
}

export default Routes;