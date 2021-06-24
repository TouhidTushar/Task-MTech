import { cartConstants } from "../actions/constants";

const initState = {
  cartItems: [],
  loading: false,
  serverRes: "",
};

const cartReducer = (state = initState, action) => {
  //adding items into cart
  switch (action.type) {
    case cartConstants.ADDTOCART_SUCCESS:
      state = {
        ...state,
        cartItems: action.payload.currentCartItems,
        serverRes: "item added to cart",
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

export default cartReducer;
