import * as types from './actionTypes';
import menuApi from '../api/mockMenuApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

// export function loadCoursesSuccess(courses) {
//   return { type: types.LOAD_COURSES_SUCCESS, courses};
// }

// export function createCourseSuccess(course) {
//   return {type: types.CREATE_COURSE_SUCCESS, course};
// }

// export function updateCourseSuccess(course) {
//   return {type: types.UPDATE_COURSE_SUCCESS, course};
// }

// export function loadCourses() {
//   return function(dispatch) {
//     dispatch(beginAjaxCall());
//     return courseApi.getAllCourses().then(courses => {
//       dispatch(loadCoursesSuccess(courses));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

// export function saveCourse(course) {
//   return function (dispatch, getState) {
//     dispatch(beginAjaxCall());
//     return courseApi.saveCourse(course).then(course => {
//       course.id ? dispatch(updateCourseSuccess(course)) :
//         dispatch(createCourseSuccess(course));
//     }).catch(error => {
//       dispatch(ajaxCallError(error));
//       throw(error);
//     });
//   };
// }

export function loadMenusSuccess(menus) {
  return { type: types.LOAD_MENUS_SUCCESS, menus};
}

export function createMenuSuccess(menu) {
  return {type: types.CREATE_MENU_SUCCESS, menu};
}

export function updateMenuSuccess(menu) {
  return {type: types.UPDATE_MENU_SUCCESS, menu};
}

export function deleteMenuSuccess(menuID) {
  console.log("!!!!!!!!!")
  console.log(menuID)
  return {type: types.DELETE_MENU_SUCCESS, menuID};
}

export function loadMenus() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return menuApi.getAllMenus().then(menus => {
      dispatch(loadMenusSuccess(menus));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveMenu(menuObj) {
  
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return menuApi.saveMenu(menuObj).then(menu => {
      menuObj.id ? dispatch(updateMenuSuccess(menu)) :
      dispatch(createMenuSuccess(menu));
      console.log("SaveMenu Success!!!!!!")
      
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteMenu(menuID) {

  return function(dispatch) {
    dispatch(beginAjaxCall());
    return menuApi.deleteMenu(menuID).then(menuID => {
      dispatch(deleteMenuSuccess(menuID));
    }).catch(error => {
      throw(error);
    });
  };
}

