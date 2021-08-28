
import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

import '../CSS/Login.css'


function Login(props) {

    const {
        email,
        setEmail,
        password, 
        setPassword, 
        handleLogin,
        handleRegister,
        hasAccount,
        setHasAccount, 
    } = props;



    return (
        <div className = 'login'>
            <Container>
                <Form>
                    {hasAccount ?
                    (
                        <><Form.Label>Login</Form.Label></>
                    ) : (
                        <><Form.Label>Register</Form.Label></>
                    )}

                    
                    <Form.Group controlId="formBasicEmail"> 
                        <Form.Control type="email" placeholder="Enter Email" autoFocus required value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                        
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Enter Password" required value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                        
                    </Form.Group>


                    {hasAccount ? 
                    (
                    <>
                    <Button variant="primary" onClick={handleLogin}>
                        Login
                    </Button>
                    <p className="register_lbl" >Don't have an account? <span onClick = {() => setHasAccount(!hasAccount)}>Register</span></p>
                    </>
                    ) 
                    : 
                    (
                    <>    
                    <Button variant="primary" onClick={handleRegister}>
                        Regsiter
                    </Button>
                    <p className="register_lbl" >Already have an account? <span onClick = {() => setHasAccount(!hasAccount)}>Login</span></p>
                    </>
                    )
                    } 
                
                </Form>
                {/* <img src="./logo.png" alt="" className="login_logo"/> */}
            </Container> 
            

            
            
        </div>
    )
}

export default Login
