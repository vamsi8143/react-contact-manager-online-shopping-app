import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./Component/UserComponent/UserReducer";

const rootReducer = combineReducers({
  user: userReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
