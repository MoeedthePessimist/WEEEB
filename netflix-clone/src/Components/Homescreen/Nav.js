import React, { useState, useEffect } from 'react'
import './CSS/Nav.css'

function Nav() {


    const [show, handleShow] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className = {`nav ${show && "nav_black"}`}>
            <div className = 'nav_contents'>
                <img className = 'nav_logo' src = 'https://pngclick.com/Guest/images/Png/1924.png' />
        
                <img className = 'nav_avatar' src = 'https://i.pinimg.com/originals/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a.png' />
            </div>
        </div>
    )
}

export default Nav
