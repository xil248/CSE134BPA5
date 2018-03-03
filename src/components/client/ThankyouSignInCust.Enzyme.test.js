import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import ThankyouSignInCust from './ThankyouSignInCust';


describe('ThankyouSignInCust via Enzyme',() =>{
    it('renders h1 and button',()=>{
        const wrapper = shallow(<ThankyouSignInCust />);
        expect(wrapper.find('h1').text()).toEqual('Successfully Sign In. Ready for a meal?');
        //expect(wrapper.find('Button').text()).toEqual('Back to Homepage');
    });
});