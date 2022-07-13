import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../Redux/Todos/action";

export const Todos = () => {
  const todos = useSelector((store) => store.todos.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handelAdd = () => {
    const payload = {
      title: text,
      status: false,
    };
    fetch("http://localhost:8080/todos", {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(() => setText(""))
      .then(getData);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8080/todos")
      .then((x) => x.json())
      .then((data) => {
        dispatch(addTodo(data));
      });
  };

  return (
    <div>
      <hr />
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handelAdd}>Add</button>

      {todos.map((t) => (
        <div key={t.id}>{t.title}</div>
      ))}
    </div>
  );
};
