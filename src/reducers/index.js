import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import menus from './menuReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  menus,
  ajaxCallsInProgress
});

export default rootReducer;
