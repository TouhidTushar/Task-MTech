import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";
import orderReducer from "./order.reducer";
import productReducer from "./product.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default rootReducer;
