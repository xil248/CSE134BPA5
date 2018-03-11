import * as types from './actionTypes';
import cartApi from '../api/mockCartApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadCartSuccess(carts) {
  return { type: types.LOAD_CART_SUCCESS, carts};
}

export function createCartSuccess(cart) {
  return {type: types.CREATE_CART_SUCCESS, cart};
}

// export function updateMenuSuccess(menu) {
//   return {type: types.UPDATE_MENU_SUCCESS, menu};
// }

export function deleteCartSuccess(cartID) {
  return {type: types.DELETE_CART_SUCCESS, cartID};
}

export function emptyCartSuccess() {
  return {type: types.EMPTY_CART_SUCCESS};
}

export function loadCart() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return cartApi.getAllCarts().then(carts => {
      dispatch(loadCartSuccess(carts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCart(cartObj) {
  
  
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return cartApi.saveCart(cartObj).then(cart => {
      console.log(cart)
      // menuObj.id ? dispatch(updateMenuSuccess(menu)) :
      dispatch(createCartSuccess(cart));
      console.log("SaveCart Success!!!!!!")
      
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteCart(cartID) {

  return function(dispatch) {
    dispatch(beginAjaxCall());
    return cartApi.deleteCart(cartID).then(cartID => {
      dispatch(deleteCartSuccess(cartID));
    }).catch(error => {
      throw(error);
    });
  };
}


export function emptyCart() {

  return function(dispatch) {
    dispatch(beginAjaxCall());
    return cartApi.emptyCart().then(() => {
      dispatch(emptyCartSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}


