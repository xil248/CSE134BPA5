import React from 'react';
import {Link} from 'react-router';
import '../../styles/Menu.css'
// import '../../images/'

var idCount = 0;

class MenuOwner extends React.Component {

  constructor(props){
    super(props);
    
    if(localStorage.idCounter){
      idCount = localStorage.idCounter;
    }

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

  componentWillMount(){
    // localStorage.removeItem('menuList');
    
    if(localStorage.menuList){
      console.log(localStorage.menuList)
      this.setState({
        menuList : JSON.parse(localStorage.menuList)
      });
    }

  }

  handleAddMenu(){
    this.refs.addMenuModal.style.display = "block";
    this.setState({isAddMenu:true});
  }

  handleCloseAddMenu(){
    this.refs.addMenuModal.style.display = "none";
  }

  createMenu (menuKey) {
    console.log(menuKey);
    const curMenu = this.state.menuList[menuKey]
    // var imagePath = "Pizza.png";
    var imagePath = curMenu['ImgPath'];
    return (  
      <div className="floating-box" ref={menuKey}>
          <img src={require("./../../images/" + imagePath)}  alt="Nozomi" style={{width:'250px', height:'200px'}} />
          <h2> {curMenu['Name']} </h2>
          <h4>$ { curMenu['Price'] } </h4>
          <button className="btn btn-danger" onClick={this.deleteMenu} id={menuKey}> Delete </button>
          <button className="btn btn-warning" onClick={this.updateMenu} id={menuKey}> Update </button>
      </div>
    );
  }

  deleteMenu(event){
    const menuID = event.target.id;
    var curMenuList = this.state.menuList;
    delete curMenuList[menuID];
    this.setState({menuList : curMenuList});
    localStorage.setItem("menuList",JSON.stringify(curMenuList));
  
  }

  updateMenu(event){
    const menuID = event.target.id;
    const curMenu = this.state.menuList[menuID];
    this.setState({isAddMenu:false, itemName:curMenu['Name'], itemPrice:curMenu['Price'], imgPath:curMenu['ImgPath'], curMenuID : menuID});
    this.refs.addMenuModal.style.display = "block";


  }



  handleAddMenuOk(){
    var x = this.refs.addMenuForm;
    var name = x.elements[0].value;
    var price = x.elements[1].value;
    var imgPath = x.elements[2].value;
    var curID = 'menu' + idCount;
    
    var curMenu = this.state.menuList;
    curMenu[curID] = {Name:name,Price:price,ImgPath:imgPath};
    this.setState({menuList : curMenu});

    idCount ++;
    localStorage.setItem("idCounter", idCount);
    localStorage.setItem("menuList",JSON.stringify(this.state.menuList));
    this.refs.addMenuModal.style.display = "none";
  }

  handleEditMenuOk(){
    var curMenuList = this.state.menuList;
    curMenuList[this.state.curMenuID]['Name'] = this.state.itemName;
    curMenuList[this.state.curMenuID]['Price'] = this.state.itemPrice;
    curMenuList[this.state.curMenuID]['ImagePath'] = this.state.imgPath;
    this.setState({menuList:curMenuList});
    localStorage.setItem("menuList",JSON.stringify(curMenuList));
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
    console.log(this.state.menuList);
    return (
      <div>
        <header>
          <h2>Menu</h2>
          <button onClick={this.handleAddMenu}>Add Menu</button>  
        </header>
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
          { Object.keys(this.state.menuList).map(menuID => this.createMenu(menuID)) }
        </div>
      </div>
    );
  }
}

export default MenuOwner;
