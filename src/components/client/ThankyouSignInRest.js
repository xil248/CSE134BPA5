import React from 'react';
import {Link} from 'react-router';
import {FormGroup,ControlLabel,FormControl,Checkbox, ButtonGroup, Button, Form, Col} from 'react-bootstrap';
import NavBar from './NavBar';

class ThankyouSignInRest extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <h1>Successfully Sign In. We appreciate your service.</h1>

        <Link to="homepage">
          <input value="Back to Homepage" className = "btn btn-warning"/>

        </Link>
      </div>
    );
  }
}

export default ThankyouSignInRest;
