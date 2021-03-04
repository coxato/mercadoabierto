import React from 'react';
import CustomHead from '../components/Head/head';
// components
import Layout from '../components/Layouts/simpleLayout';
import Login from '../components/Forms/Login/loginContainer';
import RouteWrapperHOC from '../components/ContextsAndHOCs/routerWrapperHOC';

const LoginPage = () => {
    return (
        <RouteWrapperHOC needBeLogged={false} redirectTo="/"> 
            <CustomHead title="Login" />
        
            <Layout>
                <Login />
            </Layout>
        </RouteWrapperHOC>
    );
}
 
export default LoginPage;
