import React from 'react';
import {Link} from 'react-router';
import '../../styles/Restaurants.css'
import NavBar from '../client/NavBar';



class OrderOwner extends React.Component {
  constructor(props){
    super(props);
    
    // this.createCartItem = this.createCartItem.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.changeQuantity = this.changeQuantity.bind(this);
    // this.checkOut = this.checkOut.bind(this);
    this.createOrder = this.createOrder.bind(this);
  

    this.state = {
      ordersList : {},
    }

  }

  componentWillMount(){
    
    if(localStorage.orders){
      console.log(localStorage.orders)
      this.setState({
        ordersList : JSON.parse(localStorage.orders)
      });
    }

  }

  createOrder(orderID){

    var cust = this.state.ordersList[orderID]['customer'];
    return(
    <tr>
      <td> {orderID}  </td>
      <td> {cust} </td>
      <td>February 16, 2018</td>
      <td> chat </td>
    </tr>
    );

  }

  render() {
    return (
      <div>
        <NavBar/>
        <header>
          <h2>Order History</h2>
        </header>
        <div style={{overflowX: 'auto'}}>
        <table id="cartTB" className="center">
          <tr>
                  <th>OrderID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Contact</th>
          </tr>
          { Object.keys(this.state.ordersList).map(orderID => this.createOrder(orderID)) }
        </table>
        </div>
        
      </div>
    );
  }

  
 
  
}

export default OrderOwner;
