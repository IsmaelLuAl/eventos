import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("There's still no jokes");
  const refClick = useRef();

  const exChange = () => {
    // Whenever a reference is used, the "current" must always be indicated.
    refBox.current.innerHTML = Number(refBox.current.innerHTML) * change;
  };
  
  const nextjoke = () => {
    useEffect(() => {
      const url = "https://api.chucknorris.io/jokes/random/";
      const peticion = fetch(url)
      peticion
        .then((datos) => datos.json())
        .then((lectura) => {
          setJoke(lectura.value);
        })
        .catch(() => {
          console.log("Error de lectura");
        })
    }, []);
  }

  return (
    <>
      <div>{joke}</div>
      <button ref={refClick} onChange={nextjoke}>
        Next joke!
      </button>

      <div>Prueba de cambios</div>
    </>
  );
}

export default App;
