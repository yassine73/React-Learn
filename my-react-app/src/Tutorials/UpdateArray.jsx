import { useState } from "react";

function UpdateArray() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
    // Get the Content that will be added
    const newFood = document.getElementById("newFoodID").value;

    // reset the input
    document.getElementById("newFoodID").value = "";

    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => index !== i));
  }

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li
            onClick={() => {
              handleRemoveFood(index);
            }}
            key={index}
          >
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="newFoodID" placeholder="Enter Food Name" />
      <button onClick={handleAddFood}>Add</button>
    </div>
  );
}

export default UpdateArray;
