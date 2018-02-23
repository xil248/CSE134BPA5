import React from 'react';
import {Link} from 'react-router';
import '../../styles/Restaurants.css'
import '../../images/'

class HomePage extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Restaurants</h1>
        <div className="floating-box">
          <img src='../../images/McDonald.png'/>
          <h2> McDonald's </h2>
        </div>
        {/* <img src="./" alt="McDonald" style="width:250px;height:200px"/> */}
        {/* <div class="floating-box">
            <img src="./images/McDonald.png" alt="McDonald" style="width:250px;height:200px"/>
            <h2> McDonald's </h2>
            <h3> American </h3>
            <img src="./images/Rate3.png" alt="Rate3" style="width:60px;height:15px"/>
        </div> */}
      </div>
    );
  }
}

export default HomePage;
