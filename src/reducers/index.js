import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import menus from './menuReducer';
import carts from './cartReducer';
import orders from './orderReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  menus,
  carts,
  orders,
  ajaxCallsInProgress
});

export default rootReducer;
