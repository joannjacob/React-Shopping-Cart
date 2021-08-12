import { combineReducers } from "redux";
import products from "./products";
import errors from "./errors";
import messages from "./messages";
import counters from "./counters";
import cart from "./cart";

export default combineReducers({
  errors,
  messages,
  products,
  counters,
  cart
});
