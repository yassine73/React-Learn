import ComponentD from "./ComponentD";

function ComponentC() {
  return (
    <div
      style={{
        border: "2px solid black",
        margin: "5px",
        padding: "5px",
      }}
    >
      <h1>Component C</h1>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
