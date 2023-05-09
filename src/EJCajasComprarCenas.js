import React from "react";
import "./App.css";
// import "./cyberpunk-css-main/cyberpunk.css";
import computingImage from "./images/computing.png";
import prioritizeImage from "./images/prioritize.png";
import visualizationImage from "./images/visualization.png";
import MiServicio from "./MiServicio";
import { useState } from "react";

export default function App() {
  const miArray = [
    {
      id: 0,
      image: computingImage,
      name: "Computing",
      price: 150,
      color: "darkred",
    },
    {
      id: 1,
      image: prioritizeImage,
      name: "Prioritize",
      price: 200,
      color: "darkgreen",
    },
    {
      id: 2,
      image: visualizationImage,
      name: "Visualization",
      price: 250,
      color: "darkblue",
    },
    {
      id: 3,
      image: visualizationImage,
      name: "Explore",
      price: 300,
      color: "darkgoldenrod",
    },
  ];

  const [total, setTotal] = useState(0);

  return (
    <div>
      <h1>Total a pagar: {total}€</h1>
      {/* <MiComponente rey={{nombre:"Beta", reses:5, status:true}}/>
      <MiComponente rey={{nombre:"Omega", reses:22, status:false}} /> */}
      <div className="main">
        <MiServicio data={miArray} setTotal={setTotal} />
      </div>

      {/* <button class="cyber-button bg-red fg-white">
        Shoot'em All
        <span class="glitchtext">Distant RUN!</span>
        <span class="tag">A52</span>
      </button> */}

      {/* <h1 class = "cyberpunk-font-og">Cyberpunk 2077</h1> */}
    </div>
  );
}
