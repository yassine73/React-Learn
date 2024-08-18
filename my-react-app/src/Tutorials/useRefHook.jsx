import { useEffect, useRef } from "react";

function UseRefHook() {
  // useRef can work as the same of useState but not rendering a component(not loading any so useEffect don't work)
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.value = "";
    inputRef.current.style.backgroundColor = "Black";
    inputRef.current.style.color = "white";
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Focus Me</button>
        <input ref={inputRef} type="text" />
      </div>
    </>
  );
}

export default UseRefHook;
