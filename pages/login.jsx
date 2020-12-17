import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useUserInfo } from '../store/user';
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
