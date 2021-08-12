import axios from "axios";
import { returnErrors, createMessage } from "./messages";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  GET_CART,
  ADD_PRODUCT,
  GET_ORDER,
  REMOVE_FROM_ORDER
} from "./types";
// import products from "../reducers/products";

const API_URL = "http://localhost:8000";

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity: 1,
      id: product.id
    }
  };
};

//ADD PRODUCT
export const addProductToCart = order => dispatch => {
  axios
    .post(API_URL + "/api/order/", order)
    .then(res => {
      // dispatch(createMessage({ addProduct: "Product added to cart" }));
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const removeFromCart = productId => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: productId
    }
  };
};

export const updateCartQuantity = product => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: {
      product,
      quantity: 1,
      id: product.id
    }
  };
};

//GET CART
export const getCart = () => dispatch => {
  axios
    .get(API_URL + "/api/cart/")
    .then(res => {
      dispatch({
        type: GET_CART,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//GET ORDER
export const getOrder = () => dispatch => {
  axios
    .get(API_URL + "/api/order/list/")
    .then(res => {
      dispatch({
        type: GET_ORDER,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//REMOVE PRODUCT FROM ORDER
export const removeProductFromOrder = id => dispatch => {
  console.log("ID", id);
  axios
    .delete(API_URL + `/api/order/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteProduct: "Product removed from Order" }));
      dispatch({
        type: REMOVE_FROM_ORDER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
