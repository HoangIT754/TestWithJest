import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("0");

  const numberHandle = () => {
    setNumber(number === "0" ? "1" : "0");
  };

  return (
    <div className="App">
      <h2 className={number}>Hello ReactJS!</h2>
      <h3>{number}</h3>
      <button onClick={numberHandle}>Change Number</button>
    </div>
  );
}

export default App;
