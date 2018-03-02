import React from 'react';
import {Link} from 'react-router';
import NavBar from './NavBar';

class MyOrder extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <header><h2>My Order</h2></header>
        <Link to="chatcust">
          <input value="Chat With Restaurant" className = "btn btn-warning"/>
        </Link>
      </div>
    );
  }
}

export default MyOrder;
