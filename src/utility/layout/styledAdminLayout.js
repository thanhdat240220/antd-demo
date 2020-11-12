import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

//AdminLayout
export const StyledLayout = styled(Layout)`
    min-height:100vh;
`;

export const StyledContent = styled(Content)`
`;

export const StyledBackgroundColor = styled.div`
    padding: 13px 25px; 
    min-height: 360px;
`;
