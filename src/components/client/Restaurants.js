import React from 'react';
import {Link} from 'react-router';
import '../../styles/Restaurants.css'
import NavBar from './NavBar';


class Restaurants extends React.Component {

  
  render() {
    return (
      <div>
        <NavBar/>
        <h2>Restaurants</h2><br/>
        <Link to="menu">
          <div className="floating-box">
            <img src={require('../../images/McDonald.png')}  alt="McDonald" style={{width:'250px', height:'200px'}} />
            <h2> McDonald's </h2>
            <h3> American </h3>
            <img src={require("../../images/Rate3.png")} alt="Rate3" style={{width:'60px',height:'15px'}}/>
          </div>
        </Link>
        <Link to="menu">
          <div className="floating-box">
            <img src={require('../../images/Tajima_Ramen.png')}  alt="Tajima_Ramen" style={{width:'250px', height:'200px'}} />
            <h2> Tajima Ramen </h2>
            <h3> Japanese </h3>
            <img src={require("../../images/Rate3.png")} alt="Rate3" style={{width:'60px',height:'15px'}}/>
          </div>
        </Link>
        <Link to="menu">
          <div className="floating-box">
            <img src={require('../../images/Nozomi.png')}  alt="Nozomi" style={{width:'250px', height:'200px'}} />
            <h2> Nozomi </h2>
            <h3> Japanese </h3>
            <img src={require("../../images/Rate3.png")} alt="Rate3" style={{width:'60px',height:'15px'}}/>
          </div>
        </Link>
        <Link to="menu">
          <div className="floating-box">
            <img src={require('../../images/Sizzling_Pot.png')}  alt="Sizzling_Pot" style={{width:'250px', height:'200px'}} />
            <h2> Sizzling Pot King </h2>
            <h3> Chinese </h3>
            <img src={require("../../images/Rate3.png")} alt="Rate3" style={{width:'60px',height:'15px'}}/>
          </div>
        </Link>
        <Link to="menu">
          <div className="floating-box">
            <img src={require('../../images/Wings_Empire.png')}  alt="Wings_Empire" style={{width:'250px', height:'200px'}} />
            <h2> Wings Empire </h2>
            <h3> Barbeque </h3>
            <img src={require("../../images/Rate3.png")} alt="Rate3" style={{width:'60px',height:'15px'}}/>
          </div>
        </Link>
      </div>
    );
  }
}

export default Restaurants;
