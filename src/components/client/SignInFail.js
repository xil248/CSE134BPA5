import React from 'react';
import {Link} from 'react-router';
import {FormGroup,ControlLabel,FormControl,Checkbox, ButtonGroup, Button, Form, Col} from 'react-bootstrap';
import NavBar from './NavBar';

class SignInFail extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <h1>Sign In Fail! Please Try Again.</h1>       
        <Link to="signin">
        <input value="Back to Sign In" className = "btn btn-warning"/>
        </Link>
      </div>
    );
  }
}

export default SignInFail;
