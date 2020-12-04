import React, { useState } from 'react';
import LoginForm from './loginForm';


const LoginContainer = () => {

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
    }

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