import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import ThankyouSignInRest from './ThankyouSignInRest';


describe('ThankyouSignInRest via Enzyme',() =>{
    it('renders h1 and button',()=>{
        const wrapper = shallow(<ThankyouSignInRest />);
        expect(wrapper.find('h1').text()).toEqual('Successfully Sign In. We appreciate your service.');
        //expect(wrapper.find('Button').text()).toEqual('Back to Homepage');
    });
});