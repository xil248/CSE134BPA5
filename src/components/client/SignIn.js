import React from 'react';
import {Link} from 'react-router';
//import '../../styles/Homepage.css';
import 'bootstrap/dist/css/bootstrap.css';
import {browserHistory} from 'react-router';
import {FormGroup,ControlLabel,FormControl,Checkbox, ButtonGroup, Button,Col,Form} from 'react-bootstrap';
import NavBar from './NavBar';

import * as userActions from '../../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        //this.state = { checkboxValueSignIn: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleIsItChecked = this.handleIsItChecked.bind(this);
        this.checkUser = this.checkUser.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePsw = this.changePsw.bind(this);

        this.state = {
            inputEmail: '',
            inputPsw: '',
            checkboxValueSignIn: false,
            inputType: 'default'
        }
    }
    
    checkUser(){

        const type = this.state.checkboxValueSignIn ? 'rest':'cust';
        // const type = 'cust';
        const user = {
            email: this.state.inputEmail,
            psw: this.state.inputPsw,
            type: type
        }
        this.props.actions.signinUser(user).then(()=>{
            //console.log(this.props.userSession);
            //const users = [...this.props.users].sort(alphaSort);
            const theSess = [...this.props.userSession]
            const id = theSess[theSess.length-1].username;
            if(id){
                browserHistory.replace('/thankyousigninrest');
                //this.props.history.replace('/thankyousigninrest');
            }
            else{
                browserHistory.replace('/signinfail');
                //this.props.history.replace('/signinfail');
            }
        }).catch(e => {
            console.log(e);
        });;


        console.log('---------------------------------------')

    }

//     checkUserRest(){
//         //this.setState({inputType: 'rest'});
//         const user = {
//             email: this.state.inputEmail,
//             psw: this.state.inputPsw,
//             type: 'rest'
//         }
//         console.log("-------checkuserrest----user--");
//         console.log(user);
//         this.props.actions.signinUser(user).then((userSession)=>{
//             console.log("finding the user");
//             console.log(userSession);
//             // var id = userSession.username;
//             // console.log("------sign in usersession rest------");
//             // console.log(id);
        
    
//             // if(id){
//             //     browserHistory.replace('/thankyousigninrest');
//             //     //this.props.history.replace('/thankyousigninrest');
//             // }
//             // else{
//             //     browserHistory.replace('/signinfail');
//             //     //this.props.history.replace('/signinfail');
//             // }
//         });

    
//     }

// /*     componentWillUnmount(){
//         this.props.userActions.loadUserSession().then(
//             () => {}
//         );
//     } */

//     checkUserCust(){
//         //this.setState({inputType: 'cust'});
//         const user = {
//             email: this.state.inputEmail,
//             psw: this.state.inputPsw,
//             type: 'cust'
//         }
//         console.log("-------checkusercust----user--");
//         console.log(user);

//         this.props.actions.signinUser(user).then((userSession)=>{
//             console.log("finding the user");
//             var id = userSession.username;
//             console.log("------sign in usersession cust------");
//             console.log(id);
           
    
//             if(id != null){
//                 browserHistory.replace('/thankyousignincust');
//                 //this.props.history.replace('/thankyousignincust');
//             }
//             else{
//                 browserHistory.replace('/signinfail');
//                 //this.props.history.replace('/signinfail');
//             }

//         });

   
//     }

    changeEmail(event){
        this.setState({inputEmail: event.target.value});
    }

    changePsw(event){
        this.setState({inputPsw: event.target.value});
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
                <NavBar/>
                <h2>Sign In</h2>    
                <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                    Email
                    </Col>
                    <Col sm={8}>
                    <FormControl type="email" placeholder="Email" value={this.state.inputEmail} onChange={this.changeEmail} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                    Password
                    </Col>
                    <Col sm={8}>
                    <FormControl type="password" placeholder="Password" value={this.state.inputpsw} onChange={this.changePsw}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);

/* export default SignIn; */