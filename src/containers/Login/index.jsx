import React from 'react';
import { Layout, Button } from 'antd';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

class LoginContainer extends React.Component {

    render() {
        return (
            <Layout>
                <LoginForm />
            </Layout>
        )
    }
}

export default LoginContainer;