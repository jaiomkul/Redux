import { legacy_createStore as createStore, combineReducers } from "redux";
import { couterReducer } from "./Counter/reducer";
import { todoReducer } from "./Todos/reducer";

const rootReducer = combineReducers({
  counter: couterReducer,
  todos: todoReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log("Store", store.getState());
});
