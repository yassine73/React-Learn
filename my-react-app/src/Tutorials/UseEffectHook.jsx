import { useEffect, useState } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  //   // change title of document everytime an effect happened on document
  //   useEffect(() => {
  //     document.title = "Counter: " + count + " - " + color;
  //   });

  //   // change title everytime color changed
  //   useEffect(() => {
  //     document.title = "Counter: " + count + " - " + color;
  //   }, [color]);

  //   // change title everytime color or count has changed
  //   useEffect(() => {
  //     document.title = "Counter: " + count + " - " + color;
  //   }, [color, count]);

  // useEffect used to to do something when a render happened
  // You can return Some Cleanup code
  useEffect(() => {
    document.title = "Counter: " + count + " - " + color;

    return () => {
      // Cleanup code here
    };
  }, [color]);

  function AddCount() {
    setCount((c) => c + 1);
  }

  function SubstractCount() {
    setCount((c) => c - 1);
  }

  function ChangeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <>
      <div style={{ color: color }}>Counter: {count}</div>
      <button onClick={() => AddCount()}>Add</button>
      <button onClick={() => SubstractCount()}>Substract</button>
      <br />
      <button onClick={() => ChangeColor()}>Change Color</button>
    </>
  );
}

export default UseEffectHook;
