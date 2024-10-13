import React, { useState } from "react";
import "./App.css";
import ButtonComponents from "./ButtonComponents";

function App() {
  const [count, setCount] = useState(1);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div>
      <div class="container">
        <h1>Demo App - Counter</h1>
        <span
          style={{ color: count > 0 ? "green" : count < 0 ? "red" : "black" }}
          id="value"
        >
          {count}
        </span>
        <div className="btn-group">
          <button onClick={decrement} className="btn btn-decrease">
            DECREASE
          </button>
          <button onClick={reset} className="btn btn-reset">
            RESET
          </button>
          <button onClick={increment} className="btn btn-increase">
            INCREASE
          </button>
          <ButtonComponents
            title="increase"
            onClick={increment}
            className="btn-increase"
          />
          <ButtonComponents title="decrease" onClick={decrement} />
          <ButtonComponents title="reset" onClick={reset} />
        </div>
      </div>
    </div>
  );
}

export default App;
