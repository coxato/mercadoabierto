import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import signupRequests from '../../../requests/signup';
import SignupForm from './signupForm';

let redirectTimer;

const SignupContainer = () => {

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
            await signupRequests.signupUser(state);
            
            setLoading(false);
            setSuccess({ is: true, title: 'Great!, you are registered', text: 'We are redirecting you to the login page'});
            redirectTimer = setTimeout(() => {
                router.push("/login");
            }, 3000);

        } catch (err) {
            setLoading(false);
            setError({ is: true, title: 'Registration error', text: err.message });
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
        <SignupForm 
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
 
export default SignupContainer;