import { useState } from "react";

function UpdateObjectArray() {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({
    year: new Date().getFullYear(),
    make: "",
    model: "",
  });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  function handleAddCar() {
    const newYear = document.getElementById("year").value;
    const newMake = document.getElementById("make").value;
    const newModel = document.getElementById("model").value;

    setCar((c) => ({
      year: newYear,
      make: newMake,
      model: newModel,
      ...c,
    }));

    setCars((c) => [car, ...c]);

    // Reset Values
    setCar({
      year: new Date().getFullYear(),
      make: "",
      model: "",
    });
  }

  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  return (
    <>
      <center>
        <h1>List of Car Objects</h1>
        <input
          type="number"
          onChange={(e) => handleYearChange(e)}
          name=""
          id="year"
          value={car.year}
          placeholder="Year ?"
        />
        <input
          type="text"
          onChange={(e) => handleMakeChange(e)}
          name=""
          id="make"
          value={car.make}
          placeholder="Make ?"
        />
        <input
          type="text"
          onChange={(e) => handleModelChange(e)}
          name=""
          id="model"
          value={car.model}
          placeholder="Model ?"
        />
        <br />
        <input
          type="button"
          onClick={() => handleAddCar()}
          value="Add Car"
          name=""
          id=""
        />
        <br />
        <ul>
          {cars.map((car, index) => (
            <li onClick={() => handleRemoveCar(index)} key={index}>
              Year: {car.year} - Make: {car.make} - Model: {car.model}{" "}
            </li>
          ))}
        </ul>
      </center>
    </>
  );
}

export default UpdateObjectArray;
