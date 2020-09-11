import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Orders from './Orders';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './Checkout';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Test from './Test';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from './Footer';

const promise = loadStripe("pk_test_51HPw6kG8WFUDzDDcDKd8LsaRhFinSdrh4uuRjGCSFRnYFWwdTMiVcPtnfqBNKo9PAdm8t0nEysPpVzMxoUSS2REC00ckcYRMsl");

function App() {

  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
      
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/test">
            <Test />
          </Route>

          <Route path="/checkout">
            <Header /> 
            <Checkout/>
          </Route>

          <Route path="/">
            <Header /> 
            <Home />
            <Footer/>
          </Route>

          

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
// 3-37-36