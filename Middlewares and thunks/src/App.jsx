import { useState } from "react";
import "./App.css";
import { addCount } from "./Redux/Counter/action";
import { todoReducer } from "./Redux/Todos/reducer";
import { useDispatch, useSelector } from "react-redux";
import { Counter } from "./Components/Counter/Counter";
import { Todos } from "./Components/Todos/Todos";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);

  return (
    <div className="App">
      <Counter></Counter>
      <Todos></Todos>
    </div>
  );
}

export default App;
