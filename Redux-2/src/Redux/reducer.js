import { ADD_COUNT } from "./action";

export const couterReducer = (store, { type, pa }) => {
  switch (type) {
    case ADD_COUNT:
      return { ...store, counter: store.counter };
    default:
      return store;
  }
};
