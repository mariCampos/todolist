
import React from 'react';
import { Layout } from 'antd';
import LoginContainer from '../../containers/Login';
import Header from '../../components/Header';
import './style.css';
class Login extends React.Component {

    render() {
        return (
            <Layout>
                <Layout.Header id="header" style={{ textAlign: 'center' }} >
                    <Header />
                </Layout.Header>
                <Layout.Content>
                    <LoginContainer />
                </Layout.Content>
            </Layout>
        );

    }
}
export default Login;
