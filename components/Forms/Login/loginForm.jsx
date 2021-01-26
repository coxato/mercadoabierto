import React from 'react';
import Link from 'next/link';
import { Button, Form, Message, Header } from 'semantic-ui-react';


const LoginForm = ({
    handleChange,
    error,
    success,
    loading,
    handleSubmit
}) => {
    
    return(
        <div className="login-container">
            <Header as="h1" textAlign="center">Hi! Enter your email or username</Header>
            
            {
                error.is && (
                    <Message
                        error
                        header={error.title}
                        content={error.text}
                    />
                )
            }
            {
                success.is && (
                    <Message
                        success
                        header={success.title}
                        content={success.text}
                    />
                )
            }
            
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Email or username</label>
                    <Form.Input name="username_or_email" onChange={handleChange} placeholder='put your email or username' required />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <Form.Input  name="password" type="password" onChange={handleChange} placeholder="password" required />
                </Form.Field>
                
                <Button type='submit' primary fluid size='big' loading={loading} disabled={success.is} >Login!</Button>
                
                <div style={{height: '10px'}} />

                <Link href="/signup">
                    <a>
                        <Button type='submit' basic color="blue" fluid size='big'>Or Signup</Button>
                    </a>
                </Link>

            </Form>

            <style jsx>{`
                .login-container{
                    max-width: 26.5rem;
                    min-height: 25.5625rem;
                }
            `}</style>
        </div>
    )
}
 
export default LoginForm;