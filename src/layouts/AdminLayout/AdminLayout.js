import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { StyledBackgroundColor, StyledContent, StyledLayout } from '../../utility/layout/styledAdminLayout';

import { sidebar as sidebarConfig } from '../../configs/sidebarConfig';

function AdminLayout(props) {

    // const renderRoutes = (routes) => {
    //     return routes.map((route, index) => {
    //         const {
    //             component: Component,
    //             isExtra,
    //             path
    //         } = route;
    //         debugger
    //         return (
    //             <WrapSuspense>
    //                 <Route
    //                     key={index}
    //                     path={path}
    //                     extra={isExtra}
    //                     component={Component}
    //                 />
    //             </WrapSuspense>
    //         )
    //     })
    // }

    return (
        <StyledLayout >
            <Sidebar routes={sidebarConfig} />
            <Layout className="site-layout">
                <Header />
                <StyledContent >
                    <StyledBackgroundColor className="site-layout-background" >
                        {/* <Switch>
                            {
                                renderRoutes(routesAdmin)
                            }
                            <Redirect from="*" to="/dashboard" />
                        </Switch> */}
                        {props.children}
                    </StyledBackgroundColor>
                </StyledContent>
                <Footer />
            </Layout>
        </StyledLayout>
    );
}

export default AdminLayout;