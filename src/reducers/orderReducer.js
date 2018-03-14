import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function menuReducer(state = initialState.orders, action) {
  switch (action.type) {
    case types.LOAD_ORDER_SUCCESS:
      return action.orders;

    case types.SAVE_ORDER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.order)
      ];

    // case types.UPDATE_MENU_SUCCESS:
  
    //   return [
    //     ...state.filter(menu => menu.id !== action.menu.id),
    //     Object.assign({}, action.menu)
    //   ];

    // case types.DELETE_MENU_SUCCESS:
      
    //   return [
    //     ...state.filter(menu => menu.id !== action.menuID)
    //   ];

    default:
      return state;
  }
}
