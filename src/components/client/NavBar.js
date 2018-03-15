import React from 'react';
import { Link } from 'react-router';
import { Button, Navbar, NavItem, Nav } from 'react-bootstrap';
import '../../styles/Homepage.css'

import * as userActions from '../../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class NavBar extends React.Component {
  constructor(){
    super();

    this.renderLinks = this.renderLinks.bind(this);
    this.logOut =  this.logOut.bind(this);
    this.state = {
      isCust : false,
      isRest : false
    }
  }

  componentWillMount(){
    console.log("------will mount in Navbar-------");
    console.log(this.props.userSession.type);
    if(this.props.userSession.type == 'rest'){
      this.setState({
        isRest : true
      })
    }
    if(this.props.userSession.type == 'cust'){
      this.setState({
        isCust : true
      })
    }
  }

  logOut(){
/*     localStorage.setItem("signInAsCust",false);
    localStorage.setItem("signInAsRest",false);
    this.setState({
      isCust : false,
      isRest : false
    }) */
    /* this.props.userSession.username='';
    this.props.userSession.type=''; */

    this.props.actions.logOutUser().then(()=>{
    });

    this.setState({
      isCust : false,
      isRest : false
    })
  }

  renderLinks(){
    console.log("is Customer------NavBar------")
    console.log(this.state.isCust);
    console.log("is Restaurant--------NavBar--------")
    console.log(this.state.isRest);

    if(this.state.isCust){
      console.log("THIS IS CUST");
      return (
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
          <Link to="homepage" onClick={this.logOut}> Log Out</Link>
        </NavItem>
      </Nav>
      );
    }
    else if(this.state.isRest){
      console.log("THIS IS REST");
      return (
        <Nav>
        <NavItem>
          <Link to="homepage" >Homepage</Link>
        </NavItem>
        <NavItem >
          <Link to="menuOwner" >Menu Management</Link>
        </NavItem>
        <NavItem >
          <Link to="orderowner" >Order History</Link>
        </NavItem>
        <NavItem>
          <Link to="homepage" onClick={this.logOut}> Log Out</Link>
        </NavItem>
      </Nav>
      );
    }
    else{
      return (
        <Nav>
        <NavItem>
          <Link to="homepage" >Homepage</Link>
        </NavItem>
        <NavItem >
          <Link to="restaurants" >Restaurants</Link>
        </NavItem>
        <NavItem>
          <Link to="signin" >Sign In</Link>
        </NavItem>
        <NavItem>
          <Link to="signup" >Sign Up</Link>
        </NavItem>
      </Nav>
      );
    }
  }

  render() {
    return(       
      <Navbar StaticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Food-Delivery</a>
          </Navbar.Brand>
        </Navbar.Header>
        {this.renderLinks()}
      </Navbar>
     
    );
  }
}


//export default NavBar;
function mapStateToProps(state, ownProps){
  return {
      //users: state.users,
      userSession: state.userSession
  };
}

function mapDispatchToProps(dispatch){
  return{
      actions: bindActionCreators(userActions, dispatch)
  };
} 

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);