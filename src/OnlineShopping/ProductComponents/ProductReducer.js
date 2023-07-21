import {
  USER_PRODUCT_REQUEST,
  USER_PRODUCT_REQUEST_ERROR,
  USER_PRODUCT_REQUEST_SUCCESS,
  USER_REMOVED_PRODUCT,
  USER_SELECTED_PRODUCT,
} from "./Constants";

const initialState = [
  {
    isLoading: true,
    data: {},
    error: "",
  },
];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PRODUCT_REQUEST:
      return { state };
    case USER_PRODUCT_REQUEST_SUCCESS:
      return { isLoading: false, data: action.payload, error: "" };
    case USER_PRODUCT_REQUEST_ERROR:
      return { isLoading: false, data: {}, error: action.payload };
    default:
      return state;
  }
};

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case USER_REMOVED_PRODUCT:
      return {};
    default:
      return state;
  }
};
