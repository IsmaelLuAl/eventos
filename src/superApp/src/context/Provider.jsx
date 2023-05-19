import React, { useReducer } from 'react'
import Contexto from './Contexto'
import miReducer from './miReducer'

const init = () => {

   const valor = localStorage.getItem("estado")

   return {
      //El operador !! evalua el valor de "valor" si existe algún valor será TRUE y si no hemos guardado nada sera igual a FALSE
      estado: !!valor
   }
}

const Provider = ({children}) => {

   const [logeado, dispatch] = useReducer(miReducer, {}, init)
   return (
      <Contexto.Provider value = {{
         ...logeado
      }}>
         {children}
      </Contexto.Provider>
   )
}

export default Provider