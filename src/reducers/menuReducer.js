import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function menuReducer(state = initialState.menus, action) {
  switch (action.type) {
    case types.LOAD_MENUS_SUCCESS:
      return action.menus;

    case types.CREATE_MENU_SUCCESS:
      console.log('!!!!!!!!!!!!!!!!!!');
    
      return [
        ...state,
        Object.assign({}, action.menu)
      ];

    case types.UPDATE_MENU_SUCCESS:
  
      return [
        ...state.filter(menu => menu.id !== action.menu.id),
        Object.assign({}, action.menu)
      ];

    case types.DELETE_MENU_SUCCESS:
      
      return [
        ...state.filter(menu => menu.id !== action.menuID)
      ];

    default:
      return state;
  }
}
