//import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Components/Homepage/Header';
import Home from './Components/Homepage/Home';
import Checkout from './Components/Checkoutpage/Checkout';
import Login from './Components/Loginpage/Login';
import Payment from './Components/Paymentpage/Payment';
import Orders from './Components/Orderspage/Orders';
import {auth} from './FireBase';
import { useStateValue } from './Components/Checkoutpage/StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
const promise = loadStripe("pk_test_51IdEyOI1s2ncgiVaSSogHwAvBxmZHtoQOI6nUElKJp7ufdqPQ0C3CJf8cYnGxWBS2howQuhjW182uP9X08I7qa5b005D6F4vCu");



function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run when the app component loads.
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if(authUser) {
        //the user just or was logged in.
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user has logged out.
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    //BEM 
    <Router>
      <div className="App">
      
        <Switch>

          {/*Order page*/} 
          <Route path = '/orders'>
            <Header />
            <Orders />
          </Route>

          {/*Login page*/}
          <Route path = "/login">
            <Login />
          </Route>

          {/*Checkout page*/}
          <Route path = "/checkout">
            <Header />  
            <Checkout />
          </Route>

          {/*Payment page*/}
          <Route path = "/payment">
            <Header /> 
            <Elements stripe = {promise}>
              <Payment />
            </Elements>
          </Route>


          {/*home page*/}
          <Route path = "/">
            <Header />  
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
