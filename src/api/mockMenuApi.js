import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const menuObjs = [
  {
    id: "1",
    name: "Pizza",
    price: "15",
    imgPath: "Pizza.png"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  var lastID;
  if (menuObjs.length == 0) lastID = 0;
  else lastID = menuObjs[menuObjs.length-1].id;
  
  lastID++;
  return lastID.toString();
};

class MenuApi {
  static getAllMenus() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], menuObjs));
      }, delay);
    });
  }

  static saveMenu(menuObj) {
    menuObj = Object.assign({}, menuObj); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        // const minCourseTitleLength = 1;
        // if (course.title.length < minCourseTitleLength) {
        //   reject(`Title must be at least ${minCourseTitleLength} characters.`);
        // }

        if (menuObj.id) {
          const existingMenuIndex = menuObjs.findIndex(a => a.id == menuObj.id);
          menuObjs.splice(existingMenuIndex, 1, menuObj);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          menuObj.id = generateId();
          menuObjs.push(menuObj);
        }

        resolve(menuObj);
      }, delay);
    });
  }

  static deleteMenu(menuId) {
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfMenuToDelete = menuObjs.findIndex(menu => {
          return menu.id == menuId;
        });
        menuObjs.splice(indexOfMenuToDelete, 1);
        resolve(menuId);
      }, delay);
    });
  }
}

export default MenuApi;
