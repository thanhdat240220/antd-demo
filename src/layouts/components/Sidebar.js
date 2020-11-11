import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    DashboardOutlined
} from '@ant-design/icons';
import { Logo } from '../../utility/_shareStyle';

const { Sider } = Layout;
const { SubMenu } = Menu;

function Sidebar() {

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <Logo height='63px' width='100px'/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FileOutlined />}>
                        Data Table
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<PieChartOutlined />}>
                        Analyst
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    );
}

export default Sidebar;