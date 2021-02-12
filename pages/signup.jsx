import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useUserInfo } from '../store/user';
import CustomHead from '../components/Head/head';
// components
import Layout from '../components/Layouts/simpleLayout';
import Signup from '../components/Forms/Signup/signupContainer';

const SignupPage = () => {

    const { id_user } = useUserInfo();
    const router = useRouter();
    
    useEffect(() => {
        if(id_user) router.push('/');
    }, []);

    return (
        <>
        <CustomHead title="Login" />

        {
            !id_user ? (
                <Layout>
                    <Signup />
                </Layout>
            ) : null
        }
        </>
    );
}
 
export default SignupPage;
