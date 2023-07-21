import {
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./UserType";

const initialState = {
  loading: true,
  userData: {},
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        loading: true,
        userData: {},
        error: "",
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
        error: "",
      };
    case FETCH_USER_ERROR:
      return {
        loading: false,
        userData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
