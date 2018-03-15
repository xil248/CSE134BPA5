import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action){
    switch (action.type){
        case types.LOAD_USER_SUCCESS:
            console.log('load user');
            return action.users;

        case types.CREATE_USER_SUCCESS:
            console.log('create user success!!!');
            return [
                ...state,
                Object.assign({},action.user)
            ];
        
        case types.SIGN_IN_USER_SUCCESS:
            console.log('user sign in success!!!');
            return action.userSession;

        case types.LOAD_USER_SESSION_SUCCESS:
            console.log('aaaaaaaa');
            return action.userSession;
            
        default:
            return state;
    }
}