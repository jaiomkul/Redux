import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../Redux/Todos/action";

export const Todos = () => {
  const todos = useSelector((store) => store.todos.todos);
  const dispatch = useDispatch();
  const handelAdd = () => {
    dispatch(
      addTodo({
        title: text,
        status: false,
      })
    );
  };

  const [text, setText] = useState("");
  return (
    <div>
      <hr />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handelAdd}>Add</button>

      {todos.map((t) => (
        <div key={t.title}>{t.title}</div>
      ))}
    </div>
  );
};
