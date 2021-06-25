import axios from "../helpers/axios";
import { productConstants } from "./constants";

// get all categories from database
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

// get all products from database
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
