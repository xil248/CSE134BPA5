import * as types from './actionTypes';
import orderApi from '../api/mockOrderApi';
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

export function loadOrdersSuccess(orders) {
  return { type: types.LOAD_ORDER_SUCCESS, orders };
}

// export function createMenuSuccess(menu) {
//   return {type: types.CREATE_MENU_SUCCESS, menu};
// }

export function saveOrderSuccess(order) {
  return {type: types.SAVE_ORDER_SUCCESS, order};
}

// export function deleteMenuSuccess(menuID) {
//   console.log("!!!!!!!!!")
//   console.log(menuID)
//   return {type: types.DELETE_MENU_SUCCESS, menuID};
// }

export function loadOrders() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return orderApi.getAllOrders().then(orders => {
      dispatch(loadOrdersSuccess(orders));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveOrder(orderObj) {
  
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return orderApi.saveOrder(orderObj).then(order => {
      dispatch(saveOrderSuccess(order)) 
      console.log("SaveOrder Success!!!!!!")
      
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}



