import { useState } from "react";

function UpdateObject() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  const handleYearUpdate = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };

  const handleMakeUpdate = (e) => {
    setCar((c) => ({ ...c, make: e.target.value }));
  };

  const handleModelUpdate = (e) => {
    setCar((c) => ({ ...c, model: e.target.value }));
  };

  return (
    <div>
      <p>
        Your Favorite Car is: {car.year} {car.make} {car.model}
      </p>
      <input
        type="number"
        value={car.year}
        placeholder="Car's year"
        onChange={handleYearUpdate}
      />
      <input
        type="text"
        value={car.make}
        placeholder="Car's make"
        onChange={handleMakeUpdate}
      />
      <input
        type="text"
        value={car.model}
        placeholder="Car's model"
        onChange={handleModelUpdate}
      />
    </div>
  );
}

export default UpdateObject;
