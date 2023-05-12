import "./App.css";
import React from "react";
import A from "./paginas/A";
import B from "./paginas/B";
import C from "./paginas/C";
import Nav from "./componentes/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./paginas/Error404";

function App() {
  return (
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<A />}></Route>
          <Route path="/pagina2" element={<B />}></Route>
          <Route path="/pagina3" element={<C />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;