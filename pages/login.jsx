import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useUserInfo } from '../store/user';
import CustomHead from '../components/Head/head';
// components
import Layout from '../components/Layouts/simpleLayout';
import Login from '../components/Forms/Login/loginContainer';

const LoginPage = () => {

    const { id_user } = useUserInfo();
    const router = useRouter();

    useEffect(() => {
        if(id_user) router.push('/');
    }, [])

    return (
        <>
        <CustomHead title="Login" />
        
        {
            !id_user ? (
                <Layout>
                    <Login />
                </Layout>
            ) : null
        }
        </>
    );
}
 
export default LoginPage;
