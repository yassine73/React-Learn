import { useState } from "react";

function React_hooks_comp() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  // Update Name
  const updateName = () => {
    setName("SpongeBob");
  };

  //Update Age
  const incrementAge = () => {
    setAge(age + 1);
  };

  //Update Employement
  const updateEmployement = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <div>
        {/* Get Name */}
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
      </div>
      <div>
        {/* Get Age */}
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
      </div>
      <div>
        {/* Get Age */}
        <p>is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={updateEmployement}>Toggle Employement</button>
      </div>
    </>
  );
}

export default React_hooks_comp;
