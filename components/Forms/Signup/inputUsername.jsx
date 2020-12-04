import React, { useState } from 'react';
import signupRequests from '../../../requests/signup';
import { Form } from 'semantic-ui-react';

/**
 * 
 * @param {function} onChangeFinal onChange to set the username once it is checked
 */
const UsernameInputCheck = ({onChangeFinal}) => {
    
    const [_value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const checkUsername = async ({target: { value }}) => {
        if(value.length >= 4){
            setLoading(true);
            setValue(value);
    
            const isAvaliable = await signupRequests.checkUsernameTaken(value);
            
            setLoading(false);
    
            if(isAvaliable){
                setError(false);
                onChangeFinal({ target: { username: value } });
            }
            else{
                setError('username taken');
            }
        }
        else{
            setError('must be at least 4 characters long')
        }

    }

    return (
        <Form.Field>
            <label>Username</label>
            <Form.Input 
                onChange={checkUsername} 
                placeholder="username"
                loading={loading}
                defaultValue={_value}
                error={loading ? false : error}
            />
        </Form.Field>
    );
}
 
export default UsernameInputCheck;