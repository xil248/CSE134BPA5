import React from 'react';
import {Link} from 'react-router';
import '../../styles/Menu.css'
import NavBar from './NavBar';



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



  createMenu (menuKey) {
    const curMenu = this.state.menuList[menuKey]
    var imagePath = curMenu['ImgPath'];
    return (  
      <div className="floating-box" ref={menuKey}>
          <img src={require("./../../images/" + imagePath)}  alt="Img" style={{width:'250px', height:'200px'}} />
          <h2> {curMenu['Name']} </h2>
          <h4>${curMenu['Price']} </h4>
          {/* <button className="btn btn-danger" onClick={this.deleteMenu} id={menuKey}> Delete </button> */}
          <button className="btn btn-warning" onClick={this.addToCart} id={menuKey}> Add To Cart </button>
      </div>
    );
  }
  
  addToCart(event){
    const curID = event.target.id;
    var curItem = this.state.menuList[curID];
  
    if(localStorage.myCart){
        var myCart = JSON.parse(localStorage.myCart);
        myCart[curID] = {Name:curItem['Name'],Price:curItem['Price'],ImgPath:curItem['ImgPath'],Quantity:1};
        localStorage.setItem("myCart",JSON.stringify(myCart));
        // console.log(JSON.parse(localStorage.menuList));
    }
    else{ 
        var myCart = {};
        myCart[curID] = {Name:curItem['Name'],Price:curItem['Price'],ImgPath:curItem['ImgPath'],Quantity:1};
        localStorage.setItem("myCart",JSON.stringify(myCart));
    }

    alert('Item Added');

  }

  render() {
    return (
      <div>
        <NavBar/>
        <header>
          <h2>Menu</h2>
        </header>
        <div>  
          { Object.keys(this.state.menuList).map(menuID => this.createMenu(menuID)) }
        </div>
        
      </div>
    );
  }
}

export default Menu;
