import { useEffect, useState } from "react";
import "./App.css";

function App() {
   const [joke, setJoke] = useState("There's still no jokes");

   function nextjoke() {
      const url = "https://api.chucknorris.io/jokes/random/";
      const peticion = fetch(url);

      peticion
      .then((datos) => datos.json())
      .then((lectura) => {
         setJoke(lectura.value)
      })
      .catch(console.log("Error"));
   }

   useEffect(() => {
      nextjoke();
   }, []);

   return (
      <>
      <div>{joke}</div>
      <button onClick={nextjoke} value="Next Joke!">
         Next joke!
      </button>
      </>
   );
}

export default App;
