import React from 'react';
import {Link} from 'react-router';
import {FormGroup,ControlLabel,FormControl,Checkbox, ButtonGroup, Button, Form, Col} from 'react-bootstrap';
import NavBar from './NavBar';

class ThankyouSignInCust extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <h1>Successfully Sign In. Ready for a meal?</h1>

        <Link to="homepage">
          <input value="Back to Homepage" className = "btn btn-warning"/>

        </Link>
      </div>
    );
  }
}

export default ThankyouSignInCust;