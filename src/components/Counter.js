import "./counter.css";

const Counter = () => {
  return (
    <div className="container">
      <h1>Redux Counter</h1>
      <div className="value">--Counter Value</div>
      <div>
        <button>Decrement</button>
        <button>Increment</button>
      </div>
      <button>Toggle Counter</button>
    </div>
  );
};

export default Counter;
