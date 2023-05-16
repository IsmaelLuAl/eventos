import { BrowserRouter,  Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import NavReyes from "./componentes/NavReyes";
import Error404 from "./paginas/Error404";
import Home from "./reyes/Home";
import ModeloRey from "./reyes/ModeloRey";


function App() {
  return (
    <BrowserRouter>
    {/* Este es el componente de la barra de navegación */}
    <NavReyes />
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reyes/:rey" element = {<ModeloRey/>}/>
        <Route path = "/*" element = {<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;