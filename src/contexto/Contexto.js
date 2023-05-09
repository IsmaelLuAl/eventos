import React, { createContext, useState } from 'react'

// Creamos el contexto e importamos el createContext
export const Contexto = createContext();

//Datos es el encargado de acceder al Contexto exportado arriba y recuperar los datos que tenga guardados y a los que añadan los hijos en el futuro
// Al colocar el "children" le estamos indicando a React que tiene que dirigirse a donde se encuentra Datos y darle acceso al contexto a todos los componentes hijos
export const Datos = ({ children }) => {

   //Dentro del contexto creamos un useState para poder manejar el color de las tarjetas en cualquier parte de la web
   const[color, setColor] = useState("silver")

   return (
      //Provider lo que hace es proveer de datos a todos los hijos del componente. 
      // Los hijos podrán acceder a color y a setColor.
      <Contexto.Provider value = {{ color, setColor}}>
         { children }
      </Contexto.Provider> 
   )
}
