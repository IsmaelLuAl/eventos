import React, { useContext } from 'react'
import contexto from '../context/Contexto'
import { Navigate } from 'react-router-dom'

const RutasPublicas = ({children}) => {

   const {estado} = useContext(contexto)
   return (!estado)
      ? children
      : <Navigate to = 'contenido1'/>

}

export default RutasPublicas