import React from 'react';
import {Link} from 'react-router';
import {FormGroup,ControlLabel,FormControl,Checkbox, ButtonGroup, Button, Form, Col} from 'react-bootstrap';


class ThankyouSignInRest extends React.Component {
  render() {
    return (
      <div>
        <h1>Successfully Sign In. We appreciate your service. </h1>

        <ButtonGroup>
          <Button href="homepage">Back to Homepage</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default ThankyouSignInRest;
