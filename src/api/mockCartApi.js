import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const cartObjs = [

];


//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  var lastID;
  if (menuObjs.length == 0) lastID = 0;
  else lastID = menuObjs[menuObjs.length-1].id;
  
  lastID++;
  return lastID.toString();
};

class CartApi {
  static getAllCarts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], cartObjs));
      }, delay);
    });
  }

  static saveCart(cartObj) {
    cartObj = Object.assign({}, cartObj); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
     
        cartObjs.push(cartObj);
        resolve(cartObj);
      }, delay);
    });
  }

  static deleteCart(cartId) {
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCartToDelete = cartObjs.findIndex(cart => {
          return cart.id == cartId;
        });
        cartObjs.splice(indexOfCartToDelete, 1);
        resolve(cartId);
      }, delay);
    });
  }

  static emptyCart() {
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        cartObjs.splice(0, cartObjs.length);
        // cartObjs = [];
        resolve();
      }, delay);
    });
  }


}

export default CartApi;
