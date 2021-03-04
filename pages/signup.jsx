import React from 'react';
import CustomHead from '../components/Head/head';
// components
import Layout from '../components/Layouts/simpleLayout';
import Signup from '../components/Forms/Signup/signupContainer';
import RouteWrapperHOC from '../components/ContextsAndHOCs/routerWrapperHOC';

const SignupPage = () => {
    return (
        <RouteWrapperHOC needBeLogged={false} redirectTo="/">
            <CustomHead title="Login" />

            <Layout>
                <Signup />
            </Layout>
        </RouteWrapperHOC>
    );
}
 
export default SignupPage;
