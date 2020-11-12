import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import WrapSuspense from './pages/WrapSuspense';

import { routesMain } from './configs/routerConfig';

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
                                        <WrapSuspense>
                                            <Component />
                                        </WrapSuspense>
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
                    } />
            );
        });
    }

    return (
        <>
            <Switch>
                {renderRoutes(routesMain)}
            </Switch>
        </>
    );
}

export default Routes;