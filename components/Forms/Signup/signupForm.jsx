import React from 'react';
import Link from 'next/link';
import { Button, Form, Input, Message, Header } from 'semantic-ui-react';
import InputEmailCheck from './inputEmail';
import InputUsernameCheck from './inputUsername';


const SignupForm = ({
    handleChange,
    error,
    success,
    loading,
    handleSubmit
}) => {
    
    return(
        <div className="signup-container">
            <Header as="h1" textAlign="center">Fill in your details</Header>

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
                <Form.Group widths="equal">
                    <Form.Input  name="first_name" onChange={handleChange} placeholder='First Name' minLength="2" label="First name" required />
                    <Form.Input  name="last_name" onChange={handleChange} placeholder='Last Name' minLength="2" label="Last name" required />
                </Form.Group>

                <InputUsernameCheck onChangeFinal={handleChange} />
                
                <InputEmailCheck onChangeFinal={handleChange} />

                <Form.Group widths="equal">
                    <Form.Input name="password" onChange={handleChange} placeholder='password' minLength="8" label="Password" type="password" required />
                </Form.Group>
                
                <Button type='submit' primary fluid size='big' loading={loading} disabled={success.is}>Signup!</Button>
                
                <div style={{height: '10px'}} />

                <Link href="/login">
                    <a>
                        <Button type='submit' basic color="blue" fluid size='big'>Or login</Button>
                    </a>
                </Link>
                

            </Form>

            <style jsx>{`
                .signup-container{
                    max-width: 34rem;
                }
            `}</style>
        </div>
    )
}
 
export default SignupForm;