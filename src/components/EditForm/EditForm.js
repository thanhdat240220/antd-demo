import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Button, Input, InputNumber, Form, Col, Row, Upload } from 'antd';
import { WrapContent } from '../../utility/_shareStyle';
import {
    CaretLeftFilled,
    UploadOutlined
} from '@ant-design/icons';
import { dashboardTabs } from '../../configs/tabsConfig';

const EditForm = (props) => {
    const { onChangeTabs, rowEdit } = props;
    console.log(rowEdit);
    const onFinish = (values) => {
        console.log(values);
        onChangeTabs(dashboardTabs.TableTab.id);
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

    const fields = [{
        name: ['title'],
        value: rowEdit.title
    }, {
        name: ['userId'],
        value: rowEdit.userId
    }, {
        name: ['body'],
        value: rowEdit.body
    }, {
        name: ['id'],
        value: rowEdit.id
    }];

    return (<>
        <WrapContent
            padding='0 0 20px'
        >
            <Button icon={<CaretLeftFilled />} onClick={() => onChangeTabs(dashboardTabs.TableTab.id)} />
        </WrapContent>
        <Form {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            fields={fields}
            onFieldsChange={(changeFields, allFields) => {
                console.log(changeFields, fields);
            }}
        >
            <Row>
                <Col md={12} lg={12} sm={24} offset={2}>
                    <Form.Item name={'title'} label="Title" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'userId'} label="User Id" rules={[{ type: 'number' }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={'body'} label="Description">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                        <Button type="primary" htmlType="submit">
                            Save
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


function findNumber(input) {
    console.log(input);
    let n = input + "";
    let previous = n[0];
    let _number = previous;
    let status = null;
    let lessStore = 0;

    for (let i = 1; i < n.length; i++) {
        if (parseInt(previous) > parseInt(n[i])) {
            if (status === 'grow') {
                _number += previous;
            } else {
                _number += n[i];
                previous = n[i];
                status = 'less';
            }
        }

        else if (
            parseInt(previous) < parseInt(n[i])
        ) {
            if (status === 'less') {
                debugger;
                let j = n.length - (i + 1) + 1;
                lessStore = 10 ** j - parseInt(n.slice(i));
                break;
            } else {
                _number += n[i];
                previous = n[i];
                status = 'grow';
            }
        }

        else if (
            parseInt(previous) === parseInt(n[i])
        ) {
            _number += previous;
        }

        console.log(_number);
    }
    return lessStore > 0 ? input + lessStore : parseInt(_number);
}
