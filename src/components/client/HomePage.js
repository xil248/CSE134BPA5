import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from 'react-bootstrap';
// import '../../images/'

class HomePage extends React.Component {
  render() {
    return (
      
      <div>
        <Carousel>
          <Carousel.Item>
            <img  src={require('../../images/hp1.jpg')} width={2000} height={1500} alt="2000x1500"/>
            <Carousel.Caption>
              <h3>Potato and Beer</h3>
              <p>Very Nice</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img  src={require('../../images/hp2.jpg')} width={2000} height={1500} alt="2000x1500"/>
            <Carousel.Caption>
              <h3>Fish and Chips</h3>
              <p>Very Nice</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img  src={require('../../images/hp3.jpeg')} width={2000} height={1500} alt="2000x1500"/>
            <Carousel.Caption>
              <h3>Breakfast</h3>
              <p>Very Nice</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default HomePage;
