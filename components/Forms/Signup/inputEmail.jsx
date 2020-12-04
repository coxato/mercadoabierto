import React, { useState } from 'react';
import signupRequests from '../../../requests/signup';
import { Form } from 'semantic-ui-react';


/**
 * 
 * @param {function} onChangeFinal onChange to set the email once it is checked
 */
const EmailInputCheck = ({onChangeFinal}) => {
    
    const [_value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const checkEmail = async ({target: { value }}) => {
        if(value.length >= 6){
            setLoading(true);
            setValue(value);
            
            const isAvaliable = await signupRequests.checkAvaliable('email', value); 
            
            setLoading(false);
    
            if(isAvaliable){
                setError(false);
                onChangeFinal({ target: { value, name: 'email' } });
            }
            else{
                setError('email already in use');
            }
        }
    }

    return (
        <Form.Group widths="equal">
            <Form.Input 
                onChange={checkEmail} 
                label="Email"
                placeholder="email"
                loading={loading}
                defaultValue={_value}
                error={loading ? false : error}
                required
            />
        </Form.Group>
    );
}
 
export default EmailInputCheck;