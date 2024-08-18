import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "5px",
        padding: "5px",
      }}
    >
      <h1>Component B</h1>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
