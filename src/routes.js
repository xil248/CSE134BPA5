import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
// import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

// Xinghang Added
import HomePage from './components/client/HomePage';
import Restaurants from './components/client/Restaurants';
import MyOrder from './components/client/MyOrder';
import MyCart from './components/client/MyCart';
import Menu from './components/client/Menu';
import MenuOwner from './components/owner/MenuOwner';
import SignIn from './components/client/SignIn';
import SignUp from './components/client/SignUp';
import ThankyouSignInCust from './components/client/ThankyouSignInCust';
import ThankyouSignInRest from './components/client/ThankyouSignInRest';
import ThankyouSignUpCust from './components/client/ThankyouSignUpCust';
import ThankyouSignUpRest from './components/client/ThankyouSignUpRest';
import ThankyouCheckOut from './components/client/ThankyouCheckOut';
import SignInFail from './components/client/SignInFail';
import ChatCust from './components/client/ChatCust';
import ChatRest from './components/owner/ChatRest';
import MapContainer from './components/client/MapContainer';
import OrderOwner from './components/owner/OrderOwner';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="homepage" component={HomePage} />
    <Route path="restaurants" component={Restaurants} />
    <Route path="menu" component={Menu} />
    <Route path="order" component={MyOrder} />
    <Route path="cart" component={MyCart} />
    <Route path="menuOwner" component={MenuOwner}/>

    <Route path="signin" component={SignIn}/>
    <Route path="signup" component={SignUp}/>
    <Route path="thankyousignincust" component={ThankyouSignInCust}/>
    <Route path="thankyousigninrest" component={ThankyouSignInRest}/>
    <Route path="thankyousignupcust" component={ThankyouSignUpCust}/>
    <Route path="thankyousignuprest" component={ThankyouSignUpRest}/>
    <Route path="thankyoucheckout" component={ThankyouCheckOut}/>
    <Route path="signinfail" component={SignInFail}/>
    <Route path="chatcust" component={ChatCust}/>
    <Route path="chatrest" component={ChatRest}/> 
    <Route path="mapcontainer" component={MapContainer}/>
    <Route path="orderowner" component={OrderOwner}/>
  </Route>
);
