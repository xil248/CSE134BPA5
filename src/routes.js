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



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="homepage" component={HomePage} />
    <Route path="restaurants" component={Restaurants} />
    <Route path="menu" component={Menu} />
    <Route path="order" component={MyOrder} />
    <Route path="cart" component={MyCart} />
    <Route path="menuOwner" component={MenuOwner}/>
  </Route>
);
