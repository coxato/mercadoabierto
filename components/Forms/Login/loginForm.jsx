import React from 'react';
import Link from 'next/link';
import { Button, Form, Input, Message, Container, Header } from 'semantic-ui-react';


const LoginForm = ({
    handleChange,
    error,
    success,
    loading,
    handleSubmit
}) => {
    
    return(
        <Container >
            <Header as="h1" textAlign="center">Hi! Enter your email or username</Header>
            
            <Form onSubmit={handleSubmit}>
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

                <Form.Field>
                    <label>Email or username</label>
                    <Input name="username_or_email" onChange={handleChange} placeholder='put your email or username' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <Input  name="password" type="password" onChange={handleChange} placeholder="password" />
                </Form.Field>
                
                <Button type='submit' primary fluid size='big' loading={loading}>Login!</Button>
                
                <div style={{height: '10px'}} />

                <Link href="/signup">
                    <a>
                        <Button type='submit' basic color="blue" fluid size='big'>Or Signup</Button>
                    </a>
                </Link>

            </Form>
        </Container>
    )
}
 
export default LoginForm;