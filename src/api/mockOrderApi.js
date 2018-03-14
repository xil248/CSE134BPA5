import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
var orderObjs = [
  {
    id:'1',
    custName:'cust'
  }
];


//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  var lastID;
  if (orderObjs.length == 0) lastID = 0;
  else lastID = orderObjs[orderObjs.length-1].id;
  
  lastID++;
  return lastID.toString();
};

class OrderApi {
  static getAllOrders() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], orderObjs));
      }, delay);
    });
  }

  static saveOrder(orderObj) {
    orderObj = Object.assign({}, orderObj); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        // const minCourseTitleLength = 1;
        // if (course.title.length < minCourseTitleLength) {
        //   reject(`Title must be at least ${minCourseTitleLength} characters.`);
        // }

        orderObj.id = generateId();
        orderObjs.push(orderObj);
        console.log(orderObjs)
        resolve(orderObj);
      }, delay);
    });
  }


}

export default OrderApi;
