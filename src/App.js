import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login'
import Checkout from './Components/Checkout'
import Payment from './Components/Payment'
import React, {useEffect} from 'react';
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders';

const promise = loadStripe(
  'pk_test_51I52RnHhjIyLgkwsMdAr5krVgFRogPJoJ3AEanarTmi8ETYkk9bvtTpuaC4ehmfoorF0bRE15m2SM90zNflQxrtR00UOkYj32P'
);

function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
  
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            </Route>
            <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
  </div>
);
}

export default App;
