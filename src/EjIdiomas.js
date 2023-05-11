import "./App.css";
import React from "react";
import Idiomas from "./Idiomas";
import Content from "./Content";
import Controller from "./contexto/Controller";

function App() {
   return (
      <>
      <Controller>
         <div className="banderas">
            <Idiomas></Idiomas>
         </div>

         <div className="contenido">
            <Content></Content>
         </div>
      </Controller>
      </>
   );
}

export default App;
