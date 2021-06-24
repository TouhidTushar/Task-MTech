import { cartConstants } from "./constants";

export const getCartItems = () => {
  return async (dispatch) => {
    var localCart = JSON.parse(localStorage.getItem("Cart"));
    dispatch({
      type: cartConstants.ADDTOCART_SUCCESS,
      payload: { currentCartItems: localCart },
    });
  };
};

export const addItemsToCart = (arg1, arg2) => {
  return async (dispatch) => {
    var cartItems = arg1;
    cartItems.push(arg2);
    dispatch({
      type: cartConstants.ADDTOCART_SUCCESS,
      payload: { currentCartItems: cartItems },
    });
    localStorage.setItem("Cart", JSON.stringify(cartItems));
  };
};
