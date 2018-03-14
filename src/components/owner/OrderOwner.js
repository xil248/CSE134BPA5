import React from 'react';
import {Link} from 'react-router';
import '../../styles/Restaurants.css'
import NavBar from '../client/NavBar';

import * as orderActions from '../../actions/orderActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



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

  // componentWillMount(){
  //   this.props.orderActions.loadOrders().then(() => {

  //   })
  // }


  createOrder(order){
  
    const orderID = 'order'+ order['id'];
    // var cust = this.state.ordersList[orderID]['customer'];

    return(
    <tr>
      <td> {orderID}  </td>
      <td> {order.custName} </td>
      <td>February 16, 2018</td>
      <td>
        <Link to="chatrest">
        chat 
        </Link>
      </td>
    </tr>
    );

  }

  render() {
    const {orders} = this.props;

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
          {/* { Object.keys(this.state.ordersList).map(orderID => this.createOrder(orderID)) } */}
          {orders.map(order => this.createOrder(order))}

        </table>
        </div>
        
      </div>
    );
  }

  
 
  
}

// export default OrderOwner;

function mapStateToProps(state, ownProps) {
  return {
    orders: state.orders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(cartActions, dispatch),
    orderActions: bindActionCreators(orderActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderOwner);
