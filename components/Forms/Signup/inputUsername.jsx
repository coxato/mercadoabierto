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
    
            const isAvaliable = await signupRequests.checkAvaliable('username', value);
            
            setLoading(false);
    
            if(isAvaliable){
                setError(false);
                onChangeFinal({ target: { value, name: 'username' } });
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
        <Form.Group widths="equal">
            <Form.Input 
                onChange={checkUsername} 
                label="Username"
                placeholder="username"
                loading={loading}
                defaultValue={_value}
                error={loading ? false : error}
                required
            />
        </Form.Group>
    );
}
 
export default UsernameInputCheck;