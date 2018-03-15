import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import menus from './menuReducer';
import carts from './cartReducer';
import orders from './orderReducer';
import users from './userReducer';
import userSession from './usersessionReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  menus,
  carts,
  orders,
  users,
  userSession,
  ajaxCallsInProgress
});

export default rootReducer;
