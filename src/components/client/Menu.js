import React from 'react';
import {Link} from 'react-router';
import '../../styles/Menu.css'
import NavBar from './NavBar';

import * as cartActions from '../../actions/cartActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class Menu extends React.Component {

  constructor(props){
    super(props);
    
    this.createMenu = this.createMenu.bind(this);
    this.addToCart = this.addToCart.bind(this);

  
    this.state = {
      menuList : {},
      curMenuID : '',
    }

  }

  componentWillMount(){
    
    if(localStorage.menuList){
      this.setState({
        menuList : JSON.parse(localStorage.menuList)
      });
    }

  }

  createMenu (menu) {
    console.log(menu);
    // const curMenu = this.state.menuList[menuKey]
    var imagePath = menu['imgPath'];
    return (  
      <div className="floating-box" ref={menu.id}>
          <img src={require("./../../images/" + imagePath)}  alt="Img" style={{width:'250px', height:'200px'}} />
          <h2> {menu.name} </h2>
          <div style={{fontSize:'20px',marginBottom:'8px'}}>${menu.price} </div>
          {/* <button className="btn btn-danger" onClick={this.deleteMenu} id={menuKey}> Delete </button> */}
          <button className="btn btn-warning" onClick={this.addToCart} id={menu.id}> Add To Cart </button>
      </div>
    );
  }
  
  addToCart(event){
    const menuID = event.target.id;
    console.log(menuID);
    var cartItem = {};
    this.props.menus.map(menu => {
      if(menu.id == menuID){
        cartItem = {
          id: menu.id,
          name: menu.name,
          price: menu.price,
          imgPath: menu.imgPath,
          quantity: '1'
        }
      }
    }) 

    this.props.actions.saveCart(cartItem)
    .then(() => {
      console.log('Succsess~~~~~ saveCart');
    })


    // var curItem = this.state.menuList[curID];
  
    // if(localStorage.myCart){
    //     var myCart = JSON.parse(localStorage.myCart);
    //     myCart[curID] = {Name:curItem['Name'],Price:curItem['Price'],ImgPath:curItem['ImgPath'],Quantity:1};
    //     localStorage.setItem("myCart",JSON.stringify(myCart));
    //     // console.log(JSON.parse(localStorage.menuList));
    // }
    // else{ 
    //     var myCart = {};
    //     myCart[curID] = {Name:curItem['Name'],Price:curItem['Price'],ImgPath:curItem['ImgPath'],Quantity:1};
    //     localStorage.setItem("myCart",JSON.stringify(myCart));
    // }

    alert('Item Added');

  }

  render() {
    const {menus} = this.props;

    console.log(menus);
    return (
      <div>
        <NavBar/>
        <header>
          <h2>Menu</h2>
        </header>
        <div>  
          {/* { Object.keys(this.state.menuList).map(menuID => this.createMenu(menuID)) } */}
          {menus.map(menu => this.createMenu(menu))}
        </div>
        
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    menus: state.menus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
// export default Menu;
