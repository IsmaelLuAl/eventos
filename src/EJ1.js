import computingImage from "./images/computing.png";
import prioritizeImage from "./images/prioritize.png";
import visualizationImage from "./images/visualization.png";

import "./App.css";
import { useRef } from "react";

function App() {
  // We create a constant for the box reference and the import should be done automatically.
  const refBox = useRef();
  const change = 23.16;

  const increment = (element) => {
    element.target.innerHTML = Number(element.target.innerHTML) + 1;

    if (Number(element.target.innerHTML) == 8) {
      element.target.style.backgroundColor = "red";
    } else if (Number(element.target.innerHTML) == 10) {
      element.target.innerHTML = 1;
      element.target.style.backgroundColor = "white";
    }
  };

  const exChange = () => {
    // Whenever a reference is used, the "current" must always be indicated.
    refBox.current.innerHTML = Number(refBox.current.innerHTML) * change;
  };

  const switchImage = (element) => {
    if (element.target.src.includes("computing")) {
      element.target.src = prioritizeImage;
    } else if (element.target.src.includes("prioritize")) {
      element.target.src = computingImage;
    } else {
      alert("Is noone");
    }
  };

  const reading = (element) => {
    refBox.current.innerHTML = element.target.value;
  };

  return (
    <>
      {/* The reference is placed inside the html tag we want to access. */}
      <div ref={refBox} className="box" onClick={increment}>
        1
      </div>
      <button onClick={exChange}>Aceptar</button>
      <div>
        <img onClick={switchImage} src={computingImage} />
      </div>
      <input onChange={reading} className="inputElement" />
    </>
  );
}

export default App;
