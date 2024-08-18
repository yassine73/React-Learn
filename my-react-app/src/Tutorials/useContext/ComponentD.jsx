import { useContext } from "react";
import { userContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(userContext);
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "5px",
        padding: "5px",
      }}
    >
      <h1>Component D</h1>
      <h2>See you, {user}</h2>
    </div>
  );
}

export default ComponentD;
