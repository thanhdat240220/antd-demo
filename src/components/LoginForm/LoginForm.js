import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router';
import { Logo, WrapContent } from '../../utility/_shareStyle';

function LoginForm(props) {

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 6, span: 16 },
    };

    const history = useHistory();

    const onFinish = values => {
        console.log('Success:', history);

        localStorage.setItem('Auth', JSON.stringify(values));
        if (history.location.state.from) {
            history.push(history.location.state.from);
        } else {
            history.push('/');
        }
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <WrapContent
                minHeight='100px'
                padding='10px 72px'
                backgroundColor='white'
                borderRadius='6px'
            >
                <Logo width='110px' height='80px' />
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </WrapContent>
        </>
    );
}

export default LoginForm;