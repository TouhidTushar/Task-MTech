import { productConstants } from "../actions/constants";

const initState = {
  allProducts: [],
  allCategories: [],
  loading: false,
  serverRes: "",
};

const productReducer = (state = initState, action) => {
  //retrieving categories
  switch (action.type) {
    case productConstants.GETCATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GETCATEGORY_SUCCESS:
      state = {
        ...state,
        allCategories: action.payload.categories,
        loading: false,
        serverRes: "products retrieved",
      };
      break;
    case productConstants.GETCATEGORY_FAILURE:
      state = {
        ...state,
        loading: false,
        serverRes: action.payload.Message,
      };
      break;

    //retrieving products
    case productConstants.GETPRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GETPRODUCT_SUCCESS:
      state = {
        ...state,
        allProducts: action.payload.products,
        loading: false,
        serverRes: "products retrieved",
      };
      break;
    case productConstants.GETPRODUCT_FAILURE:
      state = {
        ...state,
        loading: false,
        serverRes: action.payload.Message,
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

export default productReducer;
