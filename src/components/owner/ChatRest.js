import React from 'react';
import {Link} from 'react-router';
import {FormGroup,ControlLabel,FormControl,Checkbox, ButtonGroup, Button, Form, Col} from 'react-bootstrap';
import NavBar from '../client/NavBar';

class ChatRest extends React.Component {
    constructor(){
        super();
        this.state = {value:'',
                    toSend:''};

        this.handleChange = this.handleChange.bind(this);
        this.sendtext = this.sendtext.bind(this);
    }

    handleChange(event){

        //box.innerHTML = (time + "\\\n" + obj.message + "\\\n")+ box.innerHTML;
        //this.setState({clicksend: true});

        this.setState({value: event.target.value});
    }

    sendtext(event){
        var time = new Date();
        this.setState({toSend: this.state.toSend+"\n"+time+"\n"+this.state.value+"\n"});
        this.setState({value:''});
    }

    render() {
        return (
        <div>
            <NavBar/>
            <header><h2>Chat With Customer</h2></header>

            <FormGroup>
            <textarea readonly cols="100" rows="20" id="box" value={this.state.toSend}></textarea>
            </FormGroup>

            <FormGroup>
            <textarea cols="100" rows="5" placeholder="Enter your words" 
                    value={this.state.value} onChange={this.handleChange} id="input"></textarea>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={8}>
                    <Link to="homepage">
                        <input value="Back to Homepage" className = "btn btn-danger"/>
                    </Link>  
                    <input value="Send" className = "btn btn-success" onClick={this.sendtext}/>
                </Col>
            </FormGroup>

        </div>
        );
    }
}

export default ChatRest;