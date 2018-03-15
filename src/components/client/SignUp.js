import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import {browserHistory} from 'react-router';
import {FormGroup,ControlLabel,FormControl,Checkbox, ButtonGroup, Button, Form, Col} from 'react-bootstrap';
import NavBar from './NavBar';

import * as userActions from '../../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SignUp extends React.Component{

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleIsItChecked = this.handleIsItChecked.bind(this);
        this.createUserCust = this.createUserCust.bind(this);
        this.createUserRest = this.createUserRest.bind(this);
        this.decideRestCust = this.decideRestCust.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePsw = this.changePsw.bind(this);
        this.changeConfirmPsw = this.changeConfirmPsw.bind(this);
        this.changeAddr = this.changeAddr.bind(this);
        this.changePhone = this.changePhone.bind(this);

        this.state={
            signupEmail:'',
            signupPsw:'',
            signupConfirmPsw:'',
            signupAddr:'',
            signupPhone:'',
            signupType: 'default'
        }
    }

    handleChange(evt) {
        this.setState({ checkboxValueSignUp: evt.target.checked });
    }

    createUserCust(){
        const newCust = {
            email: this.state.signupEmail,
            psw: this.state.signupPsw,
            confirmpsw: this.state.signupConfirmPsw,
            addr: this.state.signupAddr,
            phone: this.state.signupPhone,
            type: 'cust'
        }

        this.props.actions.createUser(newCust).then(()=>{
            console.log("--------userSession----------");
            console.log(this.props.userSession);
        });
        //FIXME
        browserHistory.replace('/thankyousignupcust');
        //this.props.history.replace('/thankyousignupcust');
    }

    createUserRest(){
        const newRest = {
            email: this.state.signupEmail,
            psw: this.state.signupPsw,
            confirmpsw: this.state.signupConfirmPsw,
            addr: this.state.signupAddr,
            phone: this.state.signupPhone,
            type: 'rest'
        }

        this.props.actions.createUser(newRest).then(()=>{
            console.log("---------userSession---------");
            console.log(this.props.userSession);
        });
        //FIXME
        browserHistory.replace('/thankyousignuprest');
        //this.props.history.replace('/thankyousignuprest');
    }

    decideRestCust(){
        this.state.checkboxValueSignUp ? 
            this.createUserRest(): 
            this.createUserCust();
    }

    handleIsItChecked() {
        console.log(this.state.checkboxValueSignUp ? 'Yes' : 'No');
    }

    changeEmail(event){
        this.setState({signupEmail: event.target.value});
    }

    changePsw(event){
        this.setState({signupPsw: event.target.value});
    }

    changeConfirmPsw(event){
        this.setState({signupConfirmPsw: event.target.value});
    }

    changeAddr(event){
        this.setState({signupAddr: event.target.value});
    }

    changePhone(event){
        this.setState({signupPhone: event.target.value});
    }

    render(){
        const {users} = this.props;

        return (
            <div>
                <NavBar/>
                <h2>Sign Up</h2>

               <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                    Email
                    </Col>
                    <Col sm={8}>
                    <FormControl type="email" placeholder="Email" value={this.state.signupEmail} onChange={this.changeEmail}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                    Password
                    </Col>
                    <Col sm={8}>
                    <FormControl type="password" placeholder="Password" value={this.state.signupPsw} onChange={this.changePsw}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                    Confirm Password
                    </Col>
                    <Col sm={8}>
                    <FormControl type="password" placeholder="Re-enter Password" value={this.state.signupConfirmPsw} onChange={this.changeConfirmPsw}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                    Address
                    </Col>
                    <Col sm={8}>
                    <FormControl type="text" placeholder="Address" value={this.state.signupAddr} onChange={this.changeAddr}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                    Phone Number
                    </Col>
                    <Col sm={8}>
                    <FormControl type="tel" placeholder="Phone Number" value={this.state.signupPhone} onChange={this.changePhone}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={8}>
                    <Checkbox checked={this.state.checkboxValueSignUp} onChange={this.handleChange}>Sign Up as a restaurant</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={8}>
                        <Link to="homepage">
                        <input value="Back to Homepage" className = "btn btn-danger"/>
                        </Link>    
                        <input value="Sign Up" className = "btn btn-success" 
                            onClick={this.decideRestCust}/>
                    </Col>
                </FormGroup>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        users: state.users,
        userSession: state.userSession
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(userActions, dispatch)
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUp);