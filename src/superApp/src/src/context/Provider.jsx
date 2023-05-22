import React, { useReducer } from 'react'
import Contexto from './Contexto'
import miReducer from './miReducer'
import types from './types'

const init = () => {

   const valor = localStorage.getItem("estado")

   return {
      //El operador !! evalua el valor de "valor" si existe algún valor será TRUE y si no hemos guardado nada sera igual a FALSE
      estado: !!valor
   }
}

const Provider = ({children}) => {

   const logearme = (user = '') => {
      const action = {
         type: types.login
      }
      localStorage.setItem('estado', true)
      dispatch(action)
   }

   const deslogearme = () => {
      const action = {
         type: types.logout
      }
      localStorage.removeItem('estado')
      dispatch(action)
   }
   const [logeado, dispatch] = useReducer(miReducer, {}, init)
   return (
      <Contexto.Provider value = {{
         ...logeado,
         logearme,
         deslogearme
      }}>
         {children}
      </Contexto.Provider>
   )
}

export default Provider