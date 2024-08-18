import { useState } from "react";

function Input_Onchange_Event() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>

      <hr />

      <div>
        <p>Age: {age}</p>
        <input type="number" value={age} onChange={handleAgeChange} />
      </div>

      <hr />

      <div>
        <p>Comment: {comment}</p>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Notes"
        />
      </div>

      <hr />

      <div>
        <p>Payment: {payment}</p>
        <select value={payment} onChange={handlePaymentChange}>
          <option value="">select a payment</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="GiftCard">GiftCard</option>
        </select>
      </div>

      <hr />

      <div>
        <p>Shipping: {shipping}</p>
        <fieldset onChange={handleShippingChange}>
          <input type="radio" name="Shipping" id="DHL" value="DHL" />
          <label htmlFor="DHL">DHL</label>
          <br />
          <input type="radio" name="Shipping" id="Express" value="Express" />
          <label htmlFor="Express">Express</label>
        </fieldset>
      </div>
    </>
  );
}

export default Input_Onchange_Event;
