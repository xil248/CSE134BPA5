import React from 'react';
import { Link } from 'react-router';
import { Button, Navbar, NavItem, Nav } from 'react-bootstrap';
import '../../styles/Homepage.css'

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="topnav" id="myTopnav">
          <a href="Homepage.html" class="active">Home</a>
          {/* <a href="Restaurants.html">Restaurants</a> */}
          <Link to="restaurants" >Restaurants</Link>
          <a href="MyCart.html">My Cart</a>
          <a href="trackMealPage.html">My Order</a>
          <a href='#LoginModel' data-toggle="modal" data-target="#LoginModal">Sign In</a>
          <a href='#SignUpModel' data-toggle="modal" data-target="#SignUpModal">Sign Up</a>
          {/* <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a> */}
      </div >

      {/* <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Food-Delivery</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem>
              <Link to="restaurants" >Restaurants</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="cart" >My Cart</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="order" >My Order</Link>
            </NavItem> */}
    {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown> */}
    {/* </Nav>
        </Navbar> */}
      </div >
    );
  }
}


export default NavBar;
