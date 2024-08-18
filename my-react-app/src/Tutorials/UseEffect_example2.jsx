import { useEffect, useState } from "react";

function UseEffect_example() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // useEffect(function, [dependencies])

  // when window changed create listener and change the values width and height
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added!");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener Removed!");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default UseEffect_example;
