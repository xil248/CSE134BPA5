import * as types from './actionTypes';
import userApi from '../api/mockUserApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadUserSuccess(users) {
    return { type: types.LOAD_USER_SUCCESS, users};
}

export function createUserSuccess(user){
    return { type: types.CREATE_USER_SUCCESS, user};
}

export function loadUserSessionSuccess(userSession){
    return { type: types.LOAD_USER_SESSION_SUCCESS,userSession};
}

export function signInUserSuccess(userSession){
    return { type: types.SIGN_IN_USER_SUCCESS, userSession};
}

export function signUpUserSuccess(user){
    return { type: types.SIGN_UP_USER_SUCCESS};
}

export function logOutUserSuccess(){
    return {type: types.LOG_OUT_USER_SUCCESS};
}

export function loadUser(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return userApi.getAllUsers().then(users => {   
            dispatch(loadUserSuccess(users));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadUserSession(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return userApi.getAllUsers().then(users => {   
            dispatch(loadUserSessionSuccess(users));
        }).catch(error => {
            throw(error);
        });
    };
}

export function createUser(userObj){
    return function (dispatch, getState){
        dispatch(beginAjaxCall());
        return userApi.saveUser(userObj).then(user=>{

            // print here
            console.log(user);

            dispatch(createUserSuccess(user));
            console.log("Create user successful");
        }).catch(error=>{
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function signinUser(userObj){
    return function (dispatch,getState){
        dispatch(beginAjaxCall());
        return userApi.findUser(userObj).then(userSession=>{
            console.log("hhhhhhhhhhhhhhhhhhhhhhhh");
            console.log(userSession);
            dispatch(signInUserSuccess(userSession));
        }).catch(error=>{
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function logOutUser(){
    return function (dispatch,getState){
        dispatch(beginAjaxCall());
        return userApi.logoutUser().then(userSession=>{
            dispatch(logOutUserSuccess(userSession));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

//add further