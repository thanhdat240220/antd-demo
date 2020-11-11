import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header, Footer } = Layout;
const { SubMenu } = Menu;

//Header
export const StyledHeader = styled(Header)`
    padding: 0;
`;

export const StyledSubMenu = styled(SubMenu)`
    float: right;
`;


//Footer styled component
export const StyledFooter = styled(Footer)`
    text-align: center;
`;

