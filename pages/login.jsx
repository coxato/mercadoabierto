import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useUser } from '../store/user';
// components
import Layout from '../components/Layouts/simpleLayout';
import Login from '../components/Forms/Login/loginContainer';

const LoginPage = () => {

    const { checkIsLogged } = useUser();
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // if already exist user information in reducer
        if(checkIsLogged()){
            router.push('/');
            return null;
        }
        else{
            setLoading(false);
        }
    }, []);

    return (
        <>
        {
            !loading ? (
                <Layout>
                    <Login />
                </Layout>
            ) : null
        }
        </>
    );
}
 
export default LoginPage;
