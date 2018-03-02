import React from 'react';
import {Link} from 'react-router';
import '../../styles/MyCart.css'
import NavBar from './NavBar';

class MyCart extends React.Component {

  constructor(props){
    super(props);
    
    this.createCartItem = this.createCartItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  

    this.state = {
      cartItemList : {},
      curMenuID : '',
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

  createCartItem(cartItemID){

    const curItem = this.state.cartItemList[cartItemID]
    var imagePath = curItem['ImgPath'];

    return (
      <tr>
        <td style={{width:'400px'}}><img src={require("./../../images/" + imagePath)} style={{width:'250px', height:'200px'}}/></td> 
        <td>  {curItem['Name']}   </td>
        <td>$ {curItem['Price']}  </td>
        <td><input id = "num'+ id + '" type="number" min="1" max="100" value="1"/></td>
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
      </div>
    );
  }
}

export default MyCart;
