import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    console.log("Add button pressed", counter);
    // counter = counter + 1;
    if (counter + 1 > 20) return;
    setCounter(counter + 1);
  };

  const reduceValue = () => {
    console.log("Reduce button pressed", counter);
    // counter = counter - 1;
    if (counter - 1 < 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>STATE - UI - SYNC</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={reduceValue}>Remove value</button>
    </>
  );
}

export default App;
