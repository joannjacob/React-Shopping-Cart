import { INCREMENT, DECREMENT } from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      const found1 = state.items.some(el => el.id === action.id);
      const index1 = state.items.findIndex(x => x.id === action.id);

      if (!found1) {
        state.items.push({ id: action.id, count: 1 });
      } else {
        state.items[index1].count = state.items[index1].count + 1;
      }
      return {
        ...state,
        product: state.items[index1]
      };

    case DECREMENT:
      const found2 = state.items.some(el => el.id === action.id);
      const index2 = state.items.findIndex(x => x.id === action.id);

      if (!found2) {
        state.items.push({ id: action.id, count: 0 });
      } else {
        if (state.items[index2].count !== 0) {
          state.items[index2].count = state.items[index2].count - 1;
        }
      }
      return {
        ...state,
        product: state.items[index2]
      };
    default:
      return state;
  }
}
