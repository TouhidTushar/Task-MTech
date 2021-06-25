import axios from "../helpers/axios";
import { orderConstants } from "./constants";

export const placeNewOrder = (orderData) => {
  return async (dispatch) => {
    try {
      //   dispatch({ type: orderConstants.PLACEORDER_REQUEST });
      const res = await axios.post("/order/placeOrder", {
        data: orderData,
      });
      console.log(res);

      //   if (res.status === 200) {
      //     const { result } = res.data;
      //     dispatch({
      //       type: orderConstants.PLACEORDER_SUCCESS,
      //       payload: { products: result },
      //     });
      //   }
    } catch (error) {
      console.log(error);
      //   dispatch({
      //     type: orderConstants.PLACEORDER_FAILURE,
      //     payload: {
      //       message: "Failed to retrieve data from server!",
      //     },
      //   });
    }
  };
};
