import React from 'react';
import { Link } from 'react-router';
import { Button, Navbar, NavItem, Nav } from 'react-bootstrap';
import '../../styles/Homepage.css'

class NavBar extends React.Component {
  render() {
    return(       
      <Navbar StaticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Food-Delivery Website</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <Link to="homepage" >Homepage</Link>
          </NavItem>
          <NavItem >
            <Link to="restaurants" >Restaurants</Link>
          </NavItem>
          <NavItem >
            <Link to="cart" >My Cart</Link>
          </NavItem>
          <NavItem>
            <Link to="order" >My Order</Link>
          </NavItem>
          <NavItem>
            <Link to="signin" >Sign In</Link>
          </NavItem>
          <NavItem>
            <Link to="signup" >Sign Up</Link>
          </NavItem>
      
        </Nav>
      </Navbar>
    );
    // return (
    //   <div>
    //     <div className="topnav" id="myTopnav">
    //       <a href="Homepage.html" class="active">Home</a>
    //       {/* <a href="Restaurants.html">Restaurants</a> */}
    //       <Link to="restaurants" >Restaurants</Link>
    //       <a href="MyCart.html">My Cart</a>
    //       <a href="trackMealPage.html">My Order</a>
    //       <a href='#LoginModel' data-toggle="modal" data-target="#LoginModal">Sign In</a>
    //       <a href='#SignUpModel' data-toggle="modal" data-target="#SignUpModal">Sign Up</a>
    //       {/* <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a> */}
    //   </div >
      


    //   </div >
    // );
  }
}


export default NavBar;
