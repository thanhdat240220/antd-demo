import { Breadcrumb } from 'antd';
import React, { useMemo, useRef, useState } from 'react';
import { WrapContent } from '../../utility/_shareStyle';
import DataTable from '../DataTable/DataTable';
import { HideNavTabs } from '../../utility/component/styledDashboard';
import { Tabs } from 'antd';
import { dashboardTabs } from '../../configs/tabsConfig';
import EditForm from '../EditForm/EditForm';
function DashboardMain(props) {
    const [tabSelected, setTabSelected] = useState(dashboardTabs.TableTab.id);
    const [rowEdit, setRowEdit] = useState();

    const onChangeTabs = (id, record) => {
        setTabSelected(id);
        if (id === dashboardTabs.EditTab.id) {
            setRowEdit(record);
        }
    };

    // useMemo()

    return (
        <>
            <WrapContent
                backgroundColor='white'
                padding='10px 30px'
            >
                <Breadcrumb>
                    <Breadcrumb.Item>Argon</Breadcrumb.Item>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <WrapContent
                    backgroundColor='white'
                    padding='30px 0 20px'
                >
                    <HideNavTabs
                        activeKey={tabSelected}
                        animated={true}
                    >
                        <Tabs.TabPane tab="table" key={dashboardTabs.TableTab.id}>
                            <DataTable onChangeTabs={onChangeTabs} />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="create" key={dashboardTabs.EditTab.id}>
                            <EditForm onChangeTabs={onChangeTabs} rowEdit={rowEdit} />
                        </Tabs.TabPane>
                    </HideNavTabs>
                </WrapContent>
            </WrapContent>
        </>
    );
}

export default DashboardMain;