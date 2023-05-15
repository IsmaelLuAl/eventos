import "./App.css";
import React from "react";
import Nav from "./componentes/Nav";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import A from "./paginas/A";
import B from "./paginas/B";
import C from "./paginas/C";
import Error404 from "./paginas/Error404";
import D from "./paginas/D";

function App() {
  return (
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<A />}></Route>
          <Route path="/pagina1" element={<Navigate to = "/" />}></Route>
          <Route path="/pagina2" element={<B />}></Route>
          <Route path="/pagina3" element={<C />}></Route>
          <Route path="/pagina4/:letra" element={<D />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;