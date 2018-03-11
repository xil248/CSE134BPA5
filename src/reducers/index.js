import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import menus from './menuReducer';
import carts from './cartReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  menus,
  carts,
  ajaxCallsInProgress
});

export default rootReducer;
