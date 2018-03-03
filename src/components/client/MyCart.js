import React from 'react';
import {Link} from 'react-router';
import '../../styles/MyCart.css'
import NavBar from './NavBar';
import NumericInput from 'react-numeric-input';
import {browserHistory} from 'react-router';


class MyCart extends React.Component {

  constructor(props){
    super(props);
    
    this.createCartItem = this.createCartItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.checkOut = this.checkOut.bind(this);
  

    this.state = {
      cartItemList : {},
      curMenuID : '',
      quantity : 1
    }

  }


  componentWillMount(){
    
    if(localStorage.myCart){
      console.log(localStorage.myCart)
      this.setState({
        cartItemList : JSON.parse(localStorage.myCart)
      });
    }

  }

  changeQuantity(event){
    this.setState({quantity: event.target.value});
  }

  checkOut(){
    const curItemList = {};
    localStorage.setItem("myCart",JSON.stringify(curItemList));
    
    var idOrder;
    if(localStorage.idOrder){
        idOrder = localStorage.idOrder;
    }
    else{
        idOrder = 0;
    }
    var curID = "Order" + idOrder;

    // localStorage.removeItem("orders");
    if(localStorage.orders){
        var orders = JSON.parse(localStorage.orders);
        orders[curID] = {orderID:curID, customer:localStorage.custemail};
        localStorage.setItem("orders",JSON.stringify(orders));
    }
    else{ 
        var orders = {};
        orders[curID] = {orderID:curID, customer:localStorage.custemail};
        localStorage.setItem("orders",JSON.stringify(orders));
    }
    idOrder++;
    localStorage.setItem("idOrder",idOrder);







    browserHistory.push("/thankyoucheckout");
  }

  createCartItem(cartItemID){

    const curItem = this.state.cartItemList[cartItemID]
    var imagePath = curItem['ImgPath'];

    return (
      <tr>
        <td style={{width:'400px'}}><img src={require("./../../images/" + imagePath)} style={{width:'250px', height:'200px'}}/></td> 
        <td>  {curItem['Name']}   </td>
        <td>$ {curItem['Price']}  </td>
        {/* <td><input style={{width:"60px"}}type="number" value={this.state.quantity} onChange={this.changeQuantity}/></td> */}
        <td><NumericInput size={4} min={1} max={100} value={1}/></td>
        <td><button id = {cartItemID} onClick={this.handleDelete}> Delete </button></td> 
      </tr>
    ); 
  }

  handleDelete(event){
    console.log(event.target.id);

    var curID = event.target.id;
    var curItemList = this.state.cartItemList;
    delete curItemList[curID];
    this.setState({
      cartItemList : curItemList
    });
  
    localStorage.setItem("myCart",JSON.stringify(curItemList));
  }



  render() {
    return (
      <div>
        <NavBar/>
        <header>
          <h2>My Cart</h2>
        </header>
        <div style={{overflowX: 'auto'}}>
        <table id="cartTB" className="center">
            <tr>
                <th></th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
            </tr>
            { Object.keys(this.state.cartItemList).map(cartItemID => this.createCartItem(cartItemID)) }

        </table>
        </div>
        <br/><br/>
        <button onClick={this.checkOut}>Check Out</button>
      </div>
    );
  }
}

export default MyCart;
