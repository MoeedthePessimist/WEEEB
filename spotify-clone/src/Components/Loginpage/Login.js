import React from 'react'
import { loginUrl } from '../spotify'
import './CSS/Login.css'


function Login() {
    return (
        <div className = 'login'>
            <img className = 'login_logo' src = 'https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png' alt = '' />
            <a href = {loginUrl} className = 'login_link'>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
export default Login
