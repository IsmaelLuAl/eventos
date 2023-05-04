import React from "react";
import { useState } from "react";
import "./App.css";

export const App = () => {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [result, setResult] = useState();

  const plusMath = () => {
    setResult(Number(number1) + Number(number2));
  };

  const modify1 = (e) => {
    setNumber1(e.target.value);
  }

  const modify2 = (e) => {
    setNumber2(e.target.value);
  }

  console.log(typeof result);

  // You can declare arrays with variables in javascript
  const [name, setName] = useState("Jab");
  const [counter, setCounter] = useState(0);

  // IMPORTANT: the app does not change the variables until it exits the corresponding function.
  const switchName = () => {
    setName("Beta");
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  const increase = () => {
    // The letter "e" represents the value administered by setCounter(target, cursor position, etc..).
    // e also temporarily stores the values of the counter so that several operations can be performed within the same function.
    setCounter((e) => e +3);
    //IMPORTANT: if any other counter action is taken, it will overwrite everything we have done before.
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      {/* <h1>My name is {name}</h1>
    <button onClick={switchName}> Hola</button>
    <div>
    <button onClick={decrease}> - </button>
    <button onClick={increase}> +3 </button>
    <button onClick={reset}> Reset </button>
    <h1>{counter}</h1>
    </div> */}
      <div className="mathBox">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        ></input>{" "}
        +
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        ></input>{" "}
        =<input type="number" value={result} readOnly></input>
        <button onClick={plusMath}>Sumar</button>
      </div>
    </>
  );
};

export default App;
