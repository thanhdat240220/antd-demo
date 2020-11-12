import React from 'react';
import { Button, Input, InputNumber, Form, Col, Row, Upload } from 'antd';
import { WrapContent } from '../../utility/_shareStyle';
import {
    CaretLeftFilled,
    UploadOutlined
} from '@ant-design/icons';
import { dashboardTabs } from '../../configs/tabsConfig';

function EditForm(props) {
    const { onChangeTabs } = props;
    const onFinish = (values) => {
        console.log(values);
    }

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 12 },
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    return (<>
        <WrapContent
            padding='0 0 20px'
        >
            <Button icon={<CaretLeftFilled />} onClick={() => onChangeTabs(dashboardTabs.TableTab.id)} />
        </WrapContent>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Row>
                <Col md={12} lg={12} sm={24} offset={2}>
                    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['user', 'website']} label="Website">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Introduction">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
                <Col md={10} lg={10} sm={24}>
                    <Upload >
                        <Button icon={<UploadOutlined />}>Select File</Button>
                    </Upload>
                </Col>
            </Row>
        </Form>
    </>
    );
}

export default EditForm;