import React from 'react';
import {Link} from 'react-router';
//import '../../styles/Homepage.css';
import 'bootstrap/dist/css/bootstrap.css';
import {browserHistory} from 'react-router';
import {FormGroup,ControlLabel,FormControl,Checkbox, ButtonGroup, Button,Col,Form} from 'react-bootstrap';


class SignIn extends React.Component{
    constructor(){
        super();
        this.state = { checkboxValueSignIn: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleIsItChecked = this.handleIsItChecked.bind(this);
        this.checkUser = this.checkUser.bind(this);
    }
    
    checkUser(){
        // get the localstorage
        var emailenter = document.getElementById("signinemail");
        var pswenter = document.getElementById("signinpsw");
        var custemailget = localStorage.getItem("custemail");
        var custpswget = localStorage.getItem("custpsw");
        var restemailget = localStorage.getItem("restemail");
        var restpswget = localStorage.getItem("restpsw");

        console.log(custemailget);
        // check if cust, then redirect to cust thanks
        if(this.state.checkboxValueSignIn){
            // check if rest, then redirect to rest thanks
            if(emailenter.value === restemailget && pswenter.value === restpswget){
                localStorage.setItem("signInAsRest",true);
                browserHistory.push("/thankyousigninrest");
            }
            else{
                browserHistory.push("/signinfail");
            }
        }
        else{
            if(emailenter.value === custemailget && pswenter.value === custpswget){
                localStorage.setItem("signInAsCust",true);
                browserHistory.push("/thankyousignincust");
            }
            else{
                browserHistory.push("/signinfail");
            }
        }        
    }

    handleChange(evt) {
        this.setState({ checkboxValueSignIn: evt.target.checked });
      }

    handleIsItChecked() {
        console.log(this.state.checkboxValueSignIn ? 'Yes' : 'No');
      }

    render(){
        return (
            <div>
                <h1>Sign In</h1>    
                <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Email
                    </Col>
                    <Col sm={8}>
                    <FormControl type="email" placeholder="Email" id="signinemail" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Password
                    </Col>
                    <Col sm={8}>
                    <FormControl type="password" placeholder="Password" id="signinpsw" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={8}>
                    <Checkbox checked={this.state.checkboxValueSignIn} onChange={this.handleChange}>Login in as a restaurant</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={8}>
                    <Link to="homepage">
                        <input value="Back to Homepage" className = "btn btn-danger"/>
                    </Link>    
                    <input value="Sign In" className = "btn btn-success" 
                            onClick={this.checkUser}/>
                    </Col>
                </FormGroup>
                </Form>

                {/*<Button type="button" onClick={this.handleIsItChecked}>Is it checked?</Button>*/}
            </div>
        );
    }
}

export default SignIn;