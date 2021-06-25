import { cartConstants } from "./constants";

//get all cart items from localStorage
export const getCartItems = () => {
  return async (dispatch) => {
    var localCart = JSON.parse(localStorage.getItem("Cart"));
    if (localCart !== null) {
      dispatch({
        type: cartConstants.MANAGE_CART_STATE,
        payload: { currentCartItems: localCart },
      });
    }
  };
};

//add items to cart (new/existing)
export const addItemsToCart = (arg1, arg2) => {
  return async (dispatch) => {
    var itemAlreadyExist = false;
    var cartItems = arg1;
    for (let item of cartItems) {
      if (item.productId === arg2.productId) {
        item.orderQuantity += arg2.orderQuantity;
        itemAlreadyExist = true;
      }
    }
    if (!itemAlreadyExist) {
      cartItems.push(arg2);
    }
    dispatch({
      type: cartConstants.MANAGE_CART_STATE,
      payload: { currentCartItems: cartItems },
    });
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  };
};

//increase existing item in cart
export const updateCartAdd = (arg1, arg2) => {
  return async (dispatch) => {
    var cartItems = arg1;
    for (let item of cartItems) {
      if (item.productId === arg2.productId) {
        item.orderQuantity += 1;
      }
    }
    dispatch({
      type: cartConstants.MANAGE_CART_STATE,
      payload: { currentCartItems: cartItems },
    });
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  };
};

//decrease existing item in cart
export const updateCartSub = (arg1, arg2) => {
  return async (dispatch) => {
    var cartItems = arg1;
    for (let item of cartItems) {
      if (item.productId === arg2.productId) {
        item.orderQuantity -= 1;
      }
    }
    dispatch({
      type: cartConstants.MANAGE_CART_STATE,
      payload: { currentCartItems: cartItems },
    });
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  };
};

//drop an item from cart
export const dropCartItem = (arg1, arg2) => {
  return async (dispatch) => {
    var cartItems = arg1;
    for (let item of cartItems) {
      if (item.productId === arg2.productId) {
        var index = cartItems.indexOf(item);
        cartItems.splice(index, 1);
      }
    }
    dispatch({
      type: cartConstants.MANAGE_CART_STATE,
      payload: { currentCartItems: cartItems },
    });
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  };
};

//clear whole cart
export const emptyCart = () => {
  return async (dispatch) => {
    localStorage.removeItem("Cart");
    dispatch({
      type: cartConstants.MANAGE_CART_STATE,
      payload: { currentCartItems: [] },
    });
  };
};
