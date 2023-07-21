import axios from "axios";
import {
  userProductErrorAction,
  userProductSelectedAction,
  userProductSuccessAction,
  userRequestAction,
} from "./ProductActions";

export const fetchAllProducts = () => {
  return (dispatch) => {
    dispatch(userRequestAction);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(userProductSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(userProductErrorAction(err));
      });
  };
};

export const fetchProduct = (id) => {
  return (dispatch) => {
    dispatch(userRequestAction);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        dispatch(userProductSelectedAction(res.data));
      })
      .catch((err) => {
        dispatch(userProductErrorAction);
      });
  };
};
