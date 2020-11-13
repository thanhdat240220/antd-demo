import { Button, Space, Table, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
// import { dataSource } from '../../@fake-db/table';
import { dashboardTabs } from '../../configs/tabsConfig';
import Axios from 'axios';

import {
    ExclamationCircleOutlined
} from '@ant-design/icons';

function DataTable(props) {
    const { onChangeTabs } = props;
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setLoading(false);
                if (res.status >= 200 && res.status <= 300) {
                    setDataSource(res.data);
                } else {
                    Modal.error({
                        title: 'Loaded data fail',
                        okText: 'Ok'
                    });
                }
            })
    }, []);

    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (text, record, index) => {
                return index + 1;
            }
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'UserId',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'Description',
            dataIndex: 'body',
            key: 'desc',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record, index) => {
                return (
                    <Space size="middle">
                        <Button onClick={() => onChangeTabs(dashboardTabs.EditTab.id, record)}>Edit</Button>
                        <Button onClick={() => showDeleteConfirm(record)} danger>Delete</Button>
                    </Space>
                )
            }
        }
    ];

    const showDeleteConfirm = (record) => {
        Modal.confirm({
            title: 'Are you sure delete row?',
            icon: <ExclamationCircleOutlined />,
            content: 'Delete Row ' + record.name,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                setDataSource(dataSource.filter(row => row.id !== record.id))
                console.log('OK', record);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <>
            <Table
                dataSource={dataSource}
                columns={columns}
                loading={loading}
                rowKey={record => record.id}
            />
        </>
    );
}

export default DataTable;