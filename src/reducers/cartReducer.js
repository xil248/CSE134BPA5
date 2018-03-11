import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cartReducer(state = initialState.carts, action) {
  switch (action.type) {
    case types.LOAD_CART_SUCCESS:
      return action.carts;

    case types.CREATE_CART_SUCCESS:
    
      return [
        ...state,
        Object.assign({}, action.cart)
      ];

    // case types.UPDATE_MENU_SUCCESS:
  
    //   return [
    //     ...state.filter(menu => menu.id !== action.menu.id),
    //     Object.assign({}, action.menu)
    //   ];

    case types.DELETE_CART_SUCCESS:
      
      return [
        ...state.filter(cart => cart.id !== action.cartID)
      ];
    
    case types.EMPTY_CART_SUCCESS:
    
      return [];

      
    default:
      return state;
  }
}
