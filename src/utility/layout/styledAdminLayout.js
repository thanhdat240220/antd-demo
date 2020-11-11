import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Content } = Layout;

//AdminLayout
export const StyledLayout = styled(Layout)`
    min-height:100vh;
`;

export const StyledContent = styled(Content)`
    margin: 0 16px;
`;

export const StyledBackgroundColor = styled.div`
    padding: 24px; 
    min-height: 360px;
`;
