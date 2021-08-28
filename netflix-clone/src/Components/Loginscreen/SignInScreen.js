import React from 'react'
import './CSS/SignInScreen.css'


function SignInScreen() {
    return (
        <div className = 'signinScreen'>
            <form>
                <h1>Sign In</h1>
                <input placeholder = 'Email' type = 'email' />
                <input placeholder = 'Password' type = 'password' />
                <button type = 'submit'>Sign in</button>
                
            </form>
        </div>
    )
}

export default SignInScreen
