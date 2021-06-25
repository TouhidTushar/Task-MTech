import axios from "../helpers/axios";
import { orderConstants } from "./constants";

export const getOrderHistory = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: orderConstants.GETORDER_REQUEST });
      var orderArray = await JSON.parse(localStorage.getItem("Orders"));
      if (orderArray !== null && orderArray !== undefined) {
        dispatch({
          type: orderConstants.GETORDER_SUCCESS,
          payload: { _orders: orderArray },
        });
      } else {
        dispatch({
          type: orderConstants.GETORDER_SUCCESS,
          payload: { _orders: [] },
        });
      }
    } catch (error) {
      dispatch({
        type: orderConstants.GETORDER_FAILURE,
      });
    }
  };
};

export const placeNewOrder = (orderData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: orderConstants.PLACEORDER_REQUEST });
      const res = await axios.post("/order/placeOrder", {
        data: orderData,
      });
      if (res.status === 200) {
        var orderArray = JSON.parse(localStorage.getItem("Orders"));
        if (orderArray !== null && orderArray !== undefined) {
          orderArray.push(orderData);
          localStorage.setItem("Orders", JSON.stringify(orderArray));
        } else {
          orderArray = [];
          orderArray.push(orderData);
          localStorage.setItem("Orders", JSON.stringify(orderArray));
        }
        setTimeout(() => {
          dispatch({
            type: orderConstants.PLACEORDER_SUCCESS,
            payload: { _orders: orderArray },
          });
        }, 3000);
      }
    } catch (error) {
      dispatch({
        type: orderConstants.PLACEORDER_FAILURE,
      });
    }
  };
};
