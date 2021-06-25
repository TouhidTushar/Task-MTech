import { orderConstants } from "../actions/constants";

const initState = {
  myOrders: [],
  loading: false,
  serverRes: "",
  result: false,
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case orderConstants.GETORDER_REQUEST:
      state = {
        ...state,
      };
      break;
    case orderConstants.GETORDER_SUCCESS:
      state = {
        ...state,
        myOrders: action.payload._orders,
        serverRes: "",
      };
      break;
    case orderConstants.GETORDER_FAILURE:
      state = {
        ...state,
        serverRes: "",
      };
      break;

    case orderConstants.PLACEORDER_REQUEST:
      state = {
        ...state,
        loading: true,
        result: false,
      };
      break;
    case orderConstants.PLACEORDER_SUCCESS:
      state = {
        ...state,
        loading: false,
        myOrders: action.payload._orders,
        serverRes: "Your order has been placed!",
        result: true,
      };
      break;
    case orderConstants.PLACEORDER_FAILURE:
      state = {
        ...state,
        loading: false,
        serverRes: "something went wrong!",
        result: false,
      };
      break;

    default:
      state = {
        ...state,
      };
      break;
  }
  return state;
};

export default orderReducer;
