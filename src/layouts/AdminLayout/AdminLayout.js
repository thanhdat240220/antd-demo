import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { StyledBackgroundColor, StyledContent, StyledLayout } from '../../utility/layout/styledAdminLayout';

function AdminLayout({ children }) {
    return (
        <StyledLayout >
            <Sidebar />
            <Layout className="site-layout">
                <Header />
                <StyledContent >
                    <Breadcrumb>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <StyledBackgroundColor className="site-layout-background" >
                        {children}
                    </StyledBackgroundColor>
                </StyledContent>
                <Footer />
            </Layout>
        </StyledLayout>
    );
}

export default AdminLayout;