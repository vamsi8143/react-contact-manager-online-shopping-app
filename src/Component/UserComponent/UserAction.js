import {
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./UserType";
import axios from "axios";

export const userRequestAction = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const userSuccessAction = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const userErrorAction = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
};

export const fecthUserAction = () => {
  return (dispatch) => {
    dispatch(userRequestAction());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(userSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(userErrorAction(err.message));
      });
  };
};
