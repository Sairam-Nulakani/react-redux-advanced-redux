import "./counter.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div className="container">
      <h1>Redux Counter</h1>
      <div className="value">{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button>Toggle Counter</button>
    </div>
  );
};

export default Counter;
