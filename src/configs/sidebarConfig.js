import {
    PieChartOutlined,
    FileOutlined,
    DashboardOutlined
} from '@ant-design/icons';

export const sidebar = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: DashboardOutlined
    },
    {
        name: 'Tables',
        path: '/tables',
        icon: FileOutlined
    },
    {
        name: 'Analyst',
        path: '/analyst',
        icon: PieChartOutlined
    },
];