import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const multipIncrementCounter = () => {
    // if you want to set multiple increments you need to set "Updater Function"
    // you can use prevCounter or the first letter of counter "c" to set updater function for counter
    // prevCounter and the first letter of counter are the same use what you want
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
  };

  return (
    <div>
      <center>
        <h1>{counter}</h1>
        <button
          className="btn btn-warning"
          onClick={() => setCounter(counter - 1)}
        >
          Decrement
        </button>
        <button className="btn btn-danger" onClick={() => setCounter(0)}>
          Reset
        </button>
        <button className="btn btn-success" onClick={multipIncrementCounter}>
          Increment
        </button>
      </center>
    </div>
  );
}

export default Counter;
