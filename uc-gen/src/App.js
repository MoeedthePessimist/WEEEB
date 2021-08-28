import './App.css';
import Diagram from './Components/Diagram';
import NavBar from './Components/NavBar';
import React, { useState, useEffect } from 'react';
import Login from './Components/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import fire from './firebase';
function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(true);


  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');

  }


  const handleLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      /* switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case 'auth/wrong-password':
          setPasswordError(err.message);
          break;
      } */
      console.log(err.message);
    })
    console.log('login succcessful');
    authListener();
  };

  const handleRegister = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      /* switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case 'auth/weak-password':
          setPasswordError(err.message);
          break; 
        }*/
        console.log(err.message);
    })
    authListener();
  };


  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {  
        console.log(user.email);
        console.log('user exists');
        clearInputs();
        setUser(user);
      }else{
        console.log('user doesnt exist');
        setUser("");
      }
    })
  }

  useEffect((user) => {
    authListener();
  }, [user]);


  return (
    <div className="app">
        {(user) ? (
          <>
          <NavBar handleLogout = {handleLogout}/>
          <Diagram />
          </>
        ):(
          <Login 
          email = {email} 
          setEmail = {setEmail} 
          password = {password} 
          setPassword = {setPassword} 
          handleLogin = {handleLogin} 
          handleRegister = {handleRegister} 
          hasAccount = {hasAccount} 
          setHasAccount = {setHasAccount} 
          />
        )}

    </div>
  );
}

export default App;
