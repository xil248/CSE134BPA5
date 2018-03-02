import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import {browserHistory} from 'react-router';
import {FormGroup,ControlLabel,FormControl,Checkbox, ButtonGroup, Button, Form, Col} from 'react-bootstrap';

class SignUp extends React.Component{

    constructor(){
        super();
        this.state = { checkboxValueSignUp: false,
                        custemail: "",
                        custpsw: "",
                        restemail: "",
                        restpsw: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleIsItChecked = this.handleIsItChecked.bind(this);
        this.createUserCust = this.createUserCust.bind(this);
        this.createUserRest = this.createUserRest.bind(this);
        this.decideRestCust = this.decideRestCust.bind(this);
    }

    handleChange(evt) {
        this.setState({ checkboxValueSignUp: evt.target.checked });
      }

    createUserCust(){
        var email = document.getElementById("emailadd");
        var psw = document.getElementById("pswenter");
        this.setState({custemail: email});
        this.setState({custpsw: psw});

        // store in local storage
        // add few checks for validation later
        localStorage.setItem("custemail", email.value);
        localStorage.setItem("custpsw", psw.value);
        browserHistory.push('/thankyousignupcust');
    }

    createUserRest(){
        var email = document.getElementById("emailadd");
        var psw = document.getElementById("pswenter");
        this.setState({restemail: email});
        this.setState({restpsw: psw});

        // store in local storage
        // add few checks for validation later
        localStorage.setItem("restemail", email.value);
        localStorage.setItem("restpsw", psw.value);
        browserHistory.push('/thankyousignuprest');
    }

    decideRestCust(){
        this.state.checkboxValueSignUp ? 
            this.createUserRest(): 
            this.createUserCust();
    }

    handleIsItChecked() {
        console.log(this.state.checkboxValueSignUp ? 'Yes' : 'No');
    }

    render(){
        return (
            <div>
                <h1>Sign Up</h1>

               <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                    Email
                    </Col>
                    <Col sm={8}>
                    <FormControl type="email" placeholder="Email" id="emailadd"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                    Password
                    </Col>
                    <Col sm={8}>
                    <FormControl type="password" placeholder="Password" id="pswenter"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                    Confirm Password
                    </Col>
                    <Col sm={8}>
                    <FormControl type="password" placeholder="Re-enter Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                    Address
                    </Col>
                    <Col sm={8}>
                    <FormControl type="text" placeholder="Address" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                    Phone Number
                    </Col>
                    <Col sm={8}>
                    <FormControl type="tel" placeholder="Phone Number" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={8}>
                    <Checkbox checked={this.state.checkboxValueSignUp} onChange={this.handleChange}>Sign Up as a restaurant</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={8}>                 
                    {/*<Button bsStyle="danger" width="50px" href="#">Back to Homepage</Button>
                    <Button type="submit" bsStyle="success" width="50px"
                            onClick={function(e){this.state.checkboxValueSignUp == true? 
                            this.createUserRest: 
                            this.createUserCust}}>Sign Up</Button>*/}
                        <Link to="homepage">
                        <input value="Back to Homepage" className = "btn btn-danger"/>
                        </Link>    
                        <input value="Sign Up" className = "btn btn-success" 
                            onClick={this.decideRestCust}/>
                    </Col>
                </FormGroup>
                </Form>;
            </div>
        );
    }
}

export default SignUp;