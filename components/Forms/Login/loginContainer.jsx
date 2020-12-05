import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginForm from './loginForm';
import loginRequests from '../../../requests/login';

let redirectTimer;

const LoginContainer = () => {

    const router = useRouter();

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

            // signup user
            await loginRequests.login(state);
            
            setLoading(false);
            setSuccess({ is: true, title: 'Welcome!', text: 'We are redirecting you to the homepage'});
            redirectTimer = setTimeout(() => {
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