import "./App.css";
import React from "react";
import { Data } from "./contexto/Controller";
import Idiomas from "./Idiomas";
import Content from "./Content";

function App() {
  return (
    <>
      {/* Controller es como se llama la función exportada que hay dentro del contexto */}
      {/* <Data> */}
      <div className="banderas">
        <Idiomas></Idiomas>
      </div>

      <div className="contenido">
        <Content></Content>
      </div>

      {/* </Data> */}
    </>
  );
}

export default App;
