import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

import { Logo } from '../../utility/_shareStyle';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
// const { SubMenu } = Menu;

function Sidebar({ routes }) {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    const renderLinks = (routes) => {
        return routes.map(({ path, name, icon: Icon }, index) => {
            return (
                <Menu.Item key={name} icon={<Icon />}>
                    <Link to={path}>
                        {name}
                    </Link>
                </Menu.Item>
            );
        });
    }
    const getSelected = () => {
        const route = routes.filter((route) => route.path === window.location.pathname)[0];
        console.log(route)
        if (route) {
            return route.name;
        }
        return 'Dashboard'
    }

    const [selected, setSelected] = useState(getSelected());

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <Logo height='60px' width='100px' />
                <Menu theme="dark" defaultSelectedKeys={[selected]} mode="inline">
                    {renderLinks(routes)}
                </Menu>
            </Sider>
        </>
    );
}

export default Sidebar;