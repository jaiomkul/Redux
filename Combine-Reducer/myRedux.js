const init = {
  counter: 0,
};

//action
const inCount = { type: "INC_COUNT", payload: 1 };

// reducer
const reducer = (store, { type, payload }) => {
  switch (type) {
    case "INC_COUNT":
      return { counter: store.counter + payload };
    default:
      return store;
  }
};

class Store {
  //TODO:  implement
  constructor(reducer, init) {
    this.reducer = reducer;
    this.mystore = init;
  }
  getState() {
    return this.mystore;
  }

  dispatch(action) {
    this.mystore = this.reducer(this.mystore, action);
  }
}

const store = new Store(reducer, init);

console.log(store.getState());

store.dispatch(inCount);

console.log(store.getState());
store.dispatch(inCount);
console.log(store.getState());
