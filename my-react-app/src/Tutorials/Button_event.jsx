function Button() {
  const handleClick = () => {
    console.log("OUCH!");
  };

  let count = 0;

  const handleClick2 = (name) => {
    if (count < 3) {
      count++;
      console.log(name + " You clicked me " + count + " time/s");
    } else console.log(name + " Stop Clicking Me");
  };

  const handleEvent = (event, value) => {
    event.target.textContent = value;
  };

  return (
    <button
      onDoubleClick={(e) => handleEvent(e, "OUCH!")}
      className="btn btn-success"
    >
      Click Me
    </button>
  );
}

export default Button;
