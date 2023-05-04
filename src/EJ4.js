import "./App.css";
import { useState } from "react";


const App = () => {
  const cambios = [
    {
      moneda: "Euro",
      cambio: 1,
    },
    {
      moneda: "Peso argentino",
      cambio: 118.6,
    },
    {
      moneda: "Dólar",
      cambio: 1.14,
    },
  ];

  const [cantidad, setCantidad] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);

  const cambioDivisa = (e) => {
    setCantidad(e.target.value)
    setResultado1(e.target.value*cambios[1].cambio)
    setResultado2(e.target.value*cambios[2].cambio)
  }

  return (
    <div className="divPrincipal">
      <label htmlFor="u0">{cambios[0].moneda}</label>
      <input id="u0" type="number" onChange={cambioDivisa} value={cantidad} />

      <label htmlFor="u1">{cambios[1].moneda}</label>
      <input id="u1" type="number" readOnly value={resultado1}/>

      <label htmlFor="u2">{cambios[2].moneda}</label>
      <input id="u2" type="number" readOnly value={resultado2}/>
    </div>
  );
};

export default App;
