import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userSessionReducer(state = initialState.userSession, action){
    switch (action.type){
        case types.SIGN_IN_USER_SUCCESS:
            console.log('user sign in success!!!');
            return [
                ...state,
                Object.assign({}, action.userSession)
              ];
        ;

        case types.LOAD_USER_SESSION_SUCCESS:
            console.log('aaaaaaaa');
            return action.userSession;

        case types.LOG_OUT_USER_SUCCESS:
            console.log('user log out');
            return [
                ...state,
                Object.assign({}, action.userSession)
            ];
            
        default:
            return state;
    }
}