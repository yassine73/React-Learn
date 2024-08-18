import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const userContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Yassine");

  return (
    <div
      style={{
        border: "2px solid black",
        margin: "5px",
        padding: "5px",
      }}
    >
      <h1>Component A</h1>
      <h2>Hello, {user}</h2>
      <userContext.Provider value={user}>
        <ComponentB />
      </userContext.Provider>
    </div>
  );
}

export default ComponentA;
