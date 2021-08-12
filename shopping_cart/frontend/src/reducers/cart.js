import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  GET_CART,
  GET_ORDER,
  REMOVE_FROM_ORDER
} from "../actions/types.js";

const initialState = {
  subtotal: 0,
  total: 0,
  cartitems: [],
  cartdetails: [],
  order: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      //check if the action id exists in the addedItems
      let existed_item = state.cartitems.some(
        item => item.id === action.payload.id
      );

      if (existed_item) {
        let addedItem = state.cartitems.find(
          item => item.id === action.payload.id
        );
        console.log("item already added", addedItem);
        addedItem.quantity += 1;

        state.subtotal = state.subtotal + addedItem.cost;
        if (state.subtotal !== 0) {
          state.total =
            state.subtotal * state.cartdetails[0].tax +
            state.subtotal +
            state.cartdetails[0].shipping_charge;
        } else {
          state.total = 0;
        }
      } else {
        state.cartitems.push(action.payload.product);

        let addedItem = state.cartitems.find(
          item => item.id === action.payload.id
        );
        console.log("cart and item being added", state.cartitems, addedItem);

        addedItem.quantity = 1;

        //calculating the total
        state.subtotal = state.subtotal + addedItem.cost;
        if (state.subtotal !== 0) {
          state.total =
            state.subtotal * state.cartdetails[0].tax +
            state.subtotal +
            state.cartdetails[0].shipping_charge;
        } else {
          state.total = 0;
        }
      }
      return {
        ...state
      };

    case UPDATE_CART_QUANTITY:
      let item = state.cartitems.some(item => item.id === action.payload.id);

      if (item) {
        item = state.cartitems.find(item => item.id === action.payload.id);
        if (item.quantity !== 0) {
          item.quantity -= 1;

          state.subtotal = state.subtotal - item.cost;
          if (state.subtotal !== 0) {
            state.total =
              state.subtotal * state.cartdetails[0].tax +
              state.subtotal +
              state.cartdetails[0].shipping_charge;
          } else {
            state.total = 0;
          }
        }
      }

      return {
        ...state
      };

    case REMOVE_FROM_CART:
      let itemToRemove = state.cartitems.some(
        item => item.id === action.payload.id
      );

      if (itemToRemove) {
        itemToRemove = state.cartitems.find(
          item => item.id === action.payload.id
        );
        const currentitemquantity = itemToRemove.quantity;
        itemToRemove.quantity = 0;
        //calculating the total
        state.subtotal =
          state.subtotal - itemToRemove.cost * currentitemquantity;
        if (state.subtotal !== 0) {
          state.total =
            state.subtotal * state.cartdetails[0].tax +
            state.subtotal +
            state.cartdetails[0].shipping_charge;
        } else {
          state.total = 0;
        }

        // state.cartitems = state.cartitems.filter(
        //   item => item.id !== itemToRemove.id
        // );
        // console.log("CCCC", state.cartitems);
      }

      return {
        ...state
      };

    case GET_CART:
      return {
        ...state,
        cartdetails: action.payload
      };
    case GET_ORDER:
      if (state.order.length > 0) {
        let products = state.order;
        products.forEach(function(order, index) {
          let existed_item = state.cartitems.some(item => item.id === order.id);

          if (!existed_item) {
            state.cartitems.push(order);

            let addedItem = state.cartitems.find(item => item.id === order.id);

            addedItem.quantity = order.quantity;

            //calculating the total
            state.subtotal = state.subtotal + addedItem.cost;
            if (state.subtotal !== 0) {
              state.total =
                state.subtotal * state.cartdetails[0].tax +
                state.subtotal +
                state.cartdetails[0].shipping_charge;
            } else {
              state.total = 0;
            }
          }
        });
      }
      return {
        ...state,
        order: action.payload
      };
    case REMOVE_FROM_ORDER:
      return {
        ...state,
        order: state.order.filter(product => product.id !== action.payload)
      };
    default:
      return state;
  }
}
