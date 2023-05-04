import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("There's still no jokes");

  function nextjoke() {
    useEffect(() => {
      const url = "https://api.chucknorris.io/jokes/random/";
      const peticion = fetch(url);

      peticion.then
      peticion
        .then((datos) => datos.json())
        .then((lectura) => {
          setJoke(lectura.value);
        });
    });
  }

  return (
    <>
      <div></div>
      <button onChange={nextjoke} value={joke}>
        Next joke!
      </button>
    </>
  );
}

export default App;
