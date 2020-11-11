import { Col, Row } from 'antd';
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

function Login() {
    return (
        <>
            <Row justify='space-around' align='middle'
                style={{
                    minHeight: '100vh'
                }}>
                <Col md={14} sm={20} xs={24} lg={12} xl={9}>
                    <LoginForm />
                </Col>
            </Row>
        </>
    );
}

export default Login;