import expect from 'expect';
import userReducer from './userReducer';
import * as actions from '../actions/userActions';

describe('User Reducer',() => {
    it('should create a user when passed CREATE_USER_SUCCESS', () => {
        // arrange
        const initialState =[
            {title: 'A'},
            {title: 'B'}
        ];

        const newUser = {title: 'C'};

        const action = actions.createUserSuccess(newUser);

        //act
        const newState = userReducer(initialState, action);

        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });
});