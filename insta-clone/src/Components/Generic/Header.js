import { Button, Input } from '@material-ui/core'
import React from 'react'
import { useState, useEffect } from 'react';
import './CSS/Header.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { auth } from '../../Firebase';
import ImageUpload from '../posts/ImageUpload';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


function Header() {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [openSignIn, setOpenSignIn] = useState(false);

    const signUp = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                return authUser.user.updateProfile({
                    displayName: username,
                })
            })
            .catch((error) => alert(error.message));
        setOpen(false);
    }

    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error.message));

        setOpenSignIn(false);
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser);
                setUser(authUser);

            } else {
                setUser(null);
            }
        })

        return () => {
            unsubscribe();
        }
    }, [user, username])



    return ( 
        <div className = "header"> 
            {!user?.displayName ?
                (<h3> Sorry you need to login </h3>) 
                                : 
                (<ImageUpload username = { user?.displayName } />)
            }

            <img className = "header_logo" src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                {user ? ( <Button type = "submit" onClick = {() => auth.signOut()}> Sign out </Button>) 
                : 
                (<div>    
                    <Button onClick = {() => setOpenSignIn(true)} > Sign In </Button> 
                    <Button onClick = {() => setOpen(true)} > Sign up </Button> 
                </div>)
            }
            <Modal open = { open } onClose = {() => setOpen(false)}>
                <div style = { modalStyle }
                className = { classes.paper } >
                    <form className = "header_signUpForm" >
                        <center >
                            <img className = "header_image" src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                        </center> 
                    <Input type = "text"
                    placeholder = "username"
                    value = { username }
                    onChange = {
                        (e) => setUsername(e.target.value)
                    }
                    /> 
                    <Input type = "text"
                    placeholder = "email"
                    value = { email }
                    onChange = {
                        (e) => setEmail(e.target.value)
                    }
                    /> 
                    <Input type = "password"
                    placeholder = "password"
                    value = { password }
                    onChange = {
                        (e) => setPassword(e.target.value)
                    }
                    /> 
                    <Button type = "submit"
                    onClick = { signUp } > Sign Up </Button>

                    </form> 
                </div> 
                </Modal>

                <Modal open = { openSignIn } onClose = {() => setOpenSignIn(false)}>
                <div style = { modalStyle }
                className = { classes.paper } >
                    <form className = "header_signUpForm" >
                        <center>
                            <img className = "header_image" src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                        </center> 
                        <Input type = "text"
                        placeholder = "email"
                        value = { email }
                        onChange = {
                            (e) => setEmail(e.target.value)
                        }/> 
                        <Input type = "password"
                        placeholder = "password"
                        value = { password }
                        onChange = {
                            (e) => setPassword(e.target.value)
                        }/> 
                        <Button type = "Login"
                        onClick = { signIn } > Sign in </Button>
                    </form> 
                </div> 
                </Modal>
            </div>
    );

}

export default Header;