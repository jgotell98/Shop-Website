import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';

function App() {

const cart = useSelector((state) => state.cart);
const { cartItems } = cart;
const userSignin = useSelector((state) => state.userSignin);
const { userInfo } = userSignin;
const dispatch = useDispatch();
const signoutHandler = () =>{
  dispatch(signout());
}

  return (
    <BrowserRouter>
    <div className="grid-contaner">
            <header className="row">
                <div>
                    <Link className="brand" to="/">store name</Link>
                </div>
                <div>
                    <Link to="/cart">Cart
                     {cartItems.length > 0 && (
                      <span className="badge">{cartItems.length}</span>
                    )} 
                    </Link>
                    {
                      userInfo ? (
                      <div className="dropdown">
                        <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i> 
                        </Link>
                        <ul className="dropdown-content">
                          <Link to="#signout" onClick={signoutHandler}>
                            Sign Out
                          </Link>
                        </ul>
                      </div>
                      ) : (
                        <Link to="/signin">Sign In</Link>
                      )}                    
                </div>
            </header>
            <main>
              <Route path="/cart/:id?" component={CartScreen}></Route>
              <Route path="/product/:id" component={ProductScreen} ></Route>
              <Route path="/signin" component={SigninScreen}></Route>
              <Route path="/register" component={RegisterScreen}></Route>
              <Route path="/shipping" component={ShippingAddressScreen}></Route>
              <Route path="/payment" component={PaymentMethodScreen}></Route>
              <Route path="/placeorder" component={PlaceOrderScreen}></Route>
              <Route path="/order/:id" component={OrderScreen}></Route>
              <Route path="/" component={HomeScreen} exact></Route>
              
            </main>
            <footer className="row center">All rights reserved </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
