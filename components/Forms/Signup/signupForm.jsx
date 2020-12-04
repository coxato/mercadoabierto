import React from 'react';
import Link from 'next/link';
import { Button, Form, Input, Message, Container, Header } from 'semantic-ui-react';
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
        <Container >
            <Header as="h1" textAlign="center">Fill in your details</Header>

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
                    <label>First Name</label>
                    <Input name="first_name" onChange={handleChange} placeholder='First Name' minLength="2" />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <Input name="last_name" onChange={handleChange} placeholder='Last Name' minLength="2" />
                </Form.Field>

                <InputUsernameCheck onChangeFinal={handleChange} />
                
                <InputEmailCheck onChangeFinal={handleChange} />
                
                <Button type='submit' primary fluid size='big' loading={loading}>Signup!</Button>
                
                <div style={{height: '10px'}} />

                <Link href="/login">
                    <a>
                        <Button type='submit' basic color="blue" fluid size='big'>Or login</Button>
                    </a>
                </Link>
                

            </Form>
        </Container>
    )
}
 
export default SignupForm;