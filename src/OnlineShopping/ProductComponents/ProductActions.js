import {
  USER_PRODUCT_REQUEST,
  USER_PRODUCT_REQUEST_ERROR,
  USER_PRODUCT_REQUEST_SUCCESS,
  USER_REMOVED_PRODUCT,
  USER_SELECTED_PRODUCT,
} from "./Constants";

export const userRequestAction = () => {
  return {
    type: USER_PRODUCT_REQUEST,
  };
};

export const userProductSuccessAction = (products) => {
  return {
    type: USER_PRODUCT_REQUEST_SUCCESS,
    payload: products,
  };
};

export const userProductErrorAction = (error) => {
  return {
    type: USER_PRODUCT_REQUEST_ERROR,
    payload: error,
  };
};

export const userProductRemoveAction = () => {
  return {
    type: USER_REMOVED_PRODUCT,
  };
};

export const userProductSelectedAction = (product) => {
  return {
    type: USER_SELECTED_PRODUCT,
    payload: product,
  };
};
