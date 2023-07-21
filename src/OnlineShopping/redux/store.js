import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  productReducer,
  productsReducer,
} from "../ProductComponents/ProductReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  allProducts: productsReducer,
  product: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
