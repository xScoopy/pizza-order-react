import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [pepperoni, setPepperoni] = useState(false);
  const [sausage, setSausage] = useState(false);
  const [peppers, setPeppers] = useState(false);
  const [onions, setOnions] = useState(false);

  return (
    <div className="App">
      <div className="Order_input">
        <h1>Pizza Order</h1>
        <input
        className="name-input"
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>
          <input
            type="checkbox"
            checked={pepperoni}
            onChange={() => setPepperoni(!pepperoni)}
          />
          Pepperoni
        </label>
        <label>
          <input
            type="checkbox"
            checked={sausage}
            onChange={() => setSausage(!sausage)}
          />
          Sausage
        </label>
        <label>
          <input
            type="checkbox"
            checked={peppers}
            onChange={() => setPeppers(!peppers)}
          />
          Peppers
        </label>
        <label>
          <input
            type="checkbox"
            checked={onions}
            onChange={() => setOnions(!onions)}
          />
          Onions
        </label>
      </div>
      <div className="Order_display">
        <h2>Your Order</h2>
        <div className="name-display">{name}</div>
        {pepperoni && <div>Pepperoni</div>}
        {sausage && <div>Sausage</div>}
        {peppers && <div>Peppers</div>}
        {onions && <div>Onions</div>}
      </div>
    </div>
  );
}

export default App;
