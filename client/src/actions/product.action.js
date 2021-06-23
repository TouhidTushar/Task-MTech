import axios from "../helpers/axios";
import { productConstants } from "./constants";

// getting all categories
export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstants.GETCATEGORY_REQUEST });
      const res = await axios.get("/product/getCategories");

      if (res.status === 200) {
        const { result } = res.data;
        dispatch({
          type: productConstants.GETCATEGORY_SUCCESS,
          payload: { categories: result },
        });
      }
    } catch (error) {
      dispatch({
        type: productConstants.GETCATEGORY_FAILURE,
        payload: {
          message: "Failed to retrieve data from server!",
        },
      });
    }
  };
};

// getting all products
export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstants.GETPRODUCT_REQUEST });
      const res = await axios.get("/product/getProducts");

      if (res.status === 200) {
        const { result } = res.data;
        dispatch({
          type: productConstants.GETPRODUCT_SUCCESS,
          payload: { products: result },
        });
      }
    } catch (error) {
      dispatch({
        type: productConstants.GETPRODUCT_FAILURE,
        payload: {
          message: "Failed to retrieve data from server!",
        },
      });
    }
  };
};
