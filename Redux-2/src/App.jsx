import { useState } from "react";
import { store } from "./Redux/store";
import "./App.css";

function App() {
  const state = store.getState();

  return (
    <div className="App">
      <h1>Counter: 0</h1>
      <button>Add</button>
      <button>Sub</button>
    </div>
  );
}

export default App;
