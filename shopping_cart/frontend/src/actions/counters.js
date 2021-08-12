import { DECREMENT, INCREMENT } from "./types";

export const increment = id => {
  // console.log("action increment", id);
  return {
    type: INCREMENT,
    id
  };
};

export const decrement = id => {
  // console.log("action decrement", id);
  return {
    type: DECREMENT,
    id
  };
};
