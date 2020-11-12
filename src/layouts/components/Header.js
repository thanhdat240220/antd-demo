import React from 'react';

import { Menu, Avatar } from 'antd';
import {
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    ProfileOutlined
} from '@ant-design/icons';
import { StyledHeader, StyledSubMenu } from '../../utility/layout/styledComponent';
// import { Header } from 'antd/lib/layout/layout';

function HeaderAdmin(props) {

    const onMenuClick = (e) => {
        if (e.key === "logout") {
            localStorage.removeItem('Auth');
            window.location.reload();
        }
    }

    return (
        <>
            <StyledHeader className="site-layout-background" theme='dark'>
                <Menu
                    mode="horizontal"
                    triggerSubMenuAction="click"
                    onClick={onMenuClick}
                    theme="dark"
                >
                    <StyledSubMenu key="SubMenu"
                        title={
                            <div>
                                <Avatar size={31} icon={<UserOutlined />} /> Hello, Admin
                            </div>
                        }
                    >
                        <Menu.Item key="setting:1" icon={<ProfileOutlined />}>Profile</Menu.Item>
                        <Menu.Item key="setting:3" icon={<SettingOutlined />}>Setting</Menu.Item>
                        <Menu.Item key="logout" icon={<LogoutOutlined />}>Log out</Menu.Item>
                    </StyledSubMenu>
                </Menu>
            </StyledHeader>

        </>
    );
}

export default HeaderAdmin;