import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from 'react-bootstrap';
import NavBar from './NavBar';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Carousel>
          <Carousel.Item>
            <img  src={require('../../images/hp1.jpg')} width={2000} height={1500} alt="2000x1500"/>
            <Carousel.Caption>
              <div style={{fontSize:'20px'}}>Potato and Beer</div>
              <p>Very Nice</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img  src={require('../../images/hp2.jpg')} width={2000} height={1500} alt="2000x1500"/>
            <Carousel.Caption>
              <div style={{fontSize:'20px'}}>Fish and Chips</div>
              <p>Very Nice</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img  src={require('../../images/hp3.jpeg')} width={2000} height={1500} alt="2000x1500"/>
            <Carousel.Caption>
              <div style={{fontSize:'20px'}}>Breakfast</div>
              <p>Very Nice</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default HomePage;
