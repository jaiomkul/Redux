import { ADD_COUNT, ADD_TODO } from "./action1";

const init = { counter: 0, todos: [] };
export const couterReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_COUNT:
      return { ...store, counter: store.counter + payload };

    case ADD_TODO:
      return { ...store, todos: [...store.todos, payload] };

    default:
      return store;
  }
};
