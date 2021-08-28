import React, { useState } from 'react'
import './CSS/LoginScreen.css'
import SignInScreen from './SignInScreen';

function LoginScreen() {

    const [signIn, setSignIn]  = useState(false);

    return (
        <div className = 'loginScreen'>
            <div className = 'loginScreen_background'>
                <img className = 'loginScreen_logo' src = 'https://pngclick.com/Guest/images/Png/1924.png' alt = '' />
                <button className = 'loginScreen_button' onClick = {() => setSignIn(true)}>Sign in</button>
                <div className = 'loginScreen_gradient' />
            </div>

            <div className = 'loginScreen_body'>
                {signIn ? (
                    <SignInScreen />
                ) : (
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere, Cancel at anytime.</h2>
                    <h3>Ready to watch? Enter your email or restart your membership.</h3> 

                    <div className = 'loginScreen_input'>
                        <form>
                            <input type = 'email' 
                            placeholder = 'Email Address'
                            />
                            <button className = 'loginScreen_getStarted' onClick = {() => setSignIn(true)}>GET STARTED</button>
                        </form>
                    </div>
                </>
        )}
            </div>
        </div>
    )
}

export default LoginScreen
