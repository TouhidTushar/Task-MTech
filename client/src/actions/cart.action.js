import { cartConstants } from "./constants";

export const getCartItems = () => {
  return async (dispatch) => {
    var localCart = JSON.parse(localStorage.getItem("Cart"));
    if (localCart !== null) {
      dispatch({
        type: cartConstants.ADDTOCART_SUCCESS,
        payload: { currentCartItems: localCart },
      });
    }
  };
};

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
      type: cartConstants.ADDTOCART_SUCCESS,
      payload: { currentCartItems: cartItems },
    });
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  };
};

export const updateCartAdd = (arg1, arg2) => {
  return async (dispatch) => {
    var cartItems = arg1;
    for (let item of cartItems) {
      if (item.productId === arg2.productId) {
        item.orderQuantity += 1;
      }
    }
    dispatch({
      type: cartConstants.ADDTOCART_SUCCESS,
      payload: { currentCartItems: cartItems },
    });
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  };
};

export const updateCartSub = (arg1, arg2) => {
  return async (dispatch) => {
    var cartItems = arg1;
    for (let item of cartItems) {
      if (item.productId === arg2.productId) {
        item.orderQuantity -= 1;
      }
    }
    dispatch({
      type: cartConstants.ADDTOCART_SUCCESS,
      payload: { currentCartItems: cartItems },
    });
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  };
};

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
      type: cartConstants.ADDTOCART_SUCCESS,
      payload: { currentCartItems: cartItems },
    });
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  };
};
