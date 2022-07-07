import { legacy_createStore as createStore } from "redux";
import { couterReducer } from "./reducer";

export const store = createStore(couterReducer, { counter: 0, todos: [] });

store.subscribe(() => {
  console.log("Store", store.getState());
});
