import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../../Redux/action";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        Add
      </button>
      <button>Sub</button>
    </div>
  );
};
