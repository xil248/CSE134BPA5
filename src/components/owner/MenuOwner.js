import React from 'react';
import {Link} from 'react-router';
import '../../styles/Menu.css'
import NavBar from '../client/NavBar';

import * as menuActions from '../../actions/menuActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

var idCount = 0;

class MenuOwner extends React.Component {

  constructor(props){
    super(props);
    

    this.handleAddMenu = this.handleAddMenu.bind(this);
    this.handleCloseAddMenu = this.handleCloseAddMenu.bind(this);
    this.handleAddMenuOk = this.handleAddMenuOk.bind(this);
    this.handleEditMenuOk = this.handleEditMenuOk.bind(this);
    this.changeItemName = this.changeItemName.bind(this);
    this.changeItemPrice = this.changeItemPrice.bind(this);
    this.changeImgPath = this.changeImgPath.bind(this);
    this.createMenu = this.createMenu.bind(this);
    this.deleteMenu = this.deleteMenu.bind(this);
    this.updateMenu = this.updateMenu.bind(this);
    

    this.state = {
      itemName : '',
      itemPrice : '',
      imgPath : '',
      menuList : {},
      curMenuID : '',
      isAddMenu : true
    }

  }


  handleAddMenu(){

    this.refs.addMenuModal.style.display = "block";
    this.setState({isAddMenu:true});
  }

  handleCloseAddMenu(){
    this.refs.addMenuModal.style.display = "none";
  }

  createMenu (menu) {
  
    // const curMenu = this.state.menuList[menuKey]
    // // var imagePath = "Pizza.png";
    var imagePath = menu['imgPath'];
    return (  
      <div className="floating-box" ref={menu['id']}>
          <img src={require("./../../images/" + imagePath)}  alt="Nozomi" style={{width:'250px', height:'200px'}} />
          <h2> {menu['name']} </h2>
          <div style={{fontSize:'20px',marginBottom:'8px'}}>${menu['price']} </div>
          <button className="btn btn-danger" onClick={this.deleteMenu} id={menu['id']}> Delete </button>
          <button className="btn btn-warning" onClick={this.updateMenu} id={menu['id']}> Update </button>
      </div>
    );
    // return (  
    //   <div className="floating-box" ref={menuKey}>
    //       <img src={require("./../../images/" + imagePath)}  alt="Nozomi" style={{width:'250px', height:'200px'}} />
    //       <h2> {curMenu['Name']} </h2>
    //       <div style={{fontSize:'20px',marginBottom:'8px'}}>${curMenu['Price']} </div>
    //       <button className="btn btn-danger" onClick={this.deleteMenu} id={menuKey}> Delete </button>
    //       <button className="btn btn-warning" onClick={this.updateMenu} id={menuKey}> Update </button>
    //   </div>
    // );
  }

  deleteMenu(event){
    const menuID = event.target.id;
    console.log("~~~~~~~~~~~~~~")
    console.log(menuID)
   
    this.props.actions.deleteMenu(menuID)
    .then(() => {
      console.log('Succsess~~~~~ DeleteMenu');
      // console.log(this.props);
    })
  
  }

  updateMenu(event){
    const menuID = event.target.id;
    console.log(menuID);
    var curMenu;
    this.props.menus.map(menu => {
      if(menu.id == menuID){
        this.setState({
          isAddMenu:false, 
          itemName:menu['name'], 
          itemPrice:menu['price'], 
          imgPath:menu['imgPath'], 
          curMenuID : menuID});
      }
    }) 
    // const curMenu = this.state.menuList[menuID];
    // this.setState({isAddMenu:false, itemName:curMenu['Name'], itemPrice:curMenu['Price'], imgPath:curMenu['ImgPath'], curMenuID : menuID});
    this.refs.addMenuModal.style.display = "block";
  }



  handleAddMenuOk(){

   
    var x = this.refs.addMenuForm;
    var name = x.elements[0].value;
    var price = x.elements[1].value;
    var imgPath = x.elements[2].value;

    const menu = {
      name: name,
      price: price,
      imgPath: imgPath
    }
    

    
    this.props.actions.saveMenu(menu)
    .then(() => {
      console.log('Succsess~~~~~ AddMenu');
  
    })

    this.refs.addMenuModal.style.display = "none";

  }

  handleEditMenuOk(){
    const newMenu = {
      id: this.state.curMenuID,
      name: this.state.itemName,
      price: this.state.itemPrice,
      imgPath: this.state.imgPath
    }

    this.props.actions.saveMenu(newMenu)
    .then(() => {
      console.log('Succsess~~~~~ AddMenu');
  
    })



    this.refs.addMenuModal.style.display = "none";

  }


  changeItemName(event){
    this.setState({itemName: event.target.value});
  }

  changeItemPrice(event){
    this.setState({itemPrice: event.target.value});
  }

  changeImgPath(event){
    this.setState({imgPath: event.target.value});
  }



  
  render() {

    const {menus} = this.props;
    
    return (
      <div>
        <NavBar/>
        <header>
          <h2>Menu</h2>
        </header>
        <button onClick={this.handleAddMenu}>Add Item</button>  
        <div ref="addMenuModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={this.handleCloseAddMenu}>&times;</span>
                {this.state.isAddMenu ? <h>Please add your own menu here</h> :  <h>Please edit your own menu here</h>}
                <form ref='addMenuForm'>
                    Item Name:<br/>
                    <input type="text" name="name" value={this.state.itemName} onChange={this.changeItemName}/><br/>
                    Price:<br/>
                    <input type="text" name="price" value={this.state.itemPrice} onChange={this.changeItemPrice} /><br/>
                    Image Path:<br/>
                    <input type="text" name="image" value={this.state.imgPath} onChange={this.changeImgPath}/><br/>
                </form><br/>
                {  this.state.isAddMenu ? <button onClick={this.handleAddMenuOk}> OK </button> : 
                <button onClick={this.handleEditMenuOk}> OK </button>}           
            </div>       
        </div>
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
    actions: bindActionCreators(menuActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuOwner);

