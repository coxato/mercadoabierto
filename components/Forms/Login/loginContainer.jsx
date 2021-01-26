import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// custom hook
import { useUser } from '../../../store/user';
// components
import LoginForm from './loginForm';
import loginRequests from '../../../requests/login';
import userRequests from '../../../requests/user';

let redirectTimer;

const welcomeMessage = (firstName) => {
    const fName = firstName[0].toUpperCase() + firstName.substring(1);
    return 'Welcome ' + fName + '!';
}

const LoginContainer = () => {

    const router = useRouter();
    const { saveUserInfo } = useUser();

    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ is: false, title: '', text: '' });
    const [success, setSuccess] = useState({ is: false, title: '', text: '' });

    const handleChange = ({target: { name, value }}) => {
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        try {
            setLoading(true);
            setError({ is: false, title: '', text: '' });
            setSuccess({ is: false, title: '', text: '' });

            // login user
            await loginRequests.login(state);
            // get basic user info
            const userBasicData = await userRequests.getInfoLogged();
            
            setLoading(false);
            setSuccess({ 
                is: true, 
                title: welcomeMessage(userBasicData.first_name), 
                text: 'We are redirecting you to the homepage'
            });
            
            redirectTimer = setTimeout(() => {
                saveUserInfo(userBasicData);
                router.push("/");
            }, 4000);

        } catch (err) {
            setLoading(false);
            setError({ is: true, title: 'Login error', text: err.message });
            console.log(err);
        }
    }

    // componentDidUnmount
    useEffect(() => {
        return () => {
            clearTimeout(redirectTimer);
        }
    }, []);

    return(
        <LoginForm 
            {...{
                loading,
                error,
                success,
                handleChange,
                handleSubmit,
            }} 
        />
    )
}
 
export default LoginContainer;