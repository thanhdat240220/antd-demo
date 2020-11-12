import styled from 'styled-components';
import { Tabs } from 'antd';

//Tabs View

export const HideNavTabs = styled(Tabs).attrs((props)=>({
    animated:props.animated,
    defaultActiveKey:props.defaultActiveKey
}))`
    > .ant-tabs-nav{
        display:none;
    }
`