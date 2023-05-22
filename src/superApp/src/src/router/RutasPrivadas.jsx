import React, { useContext } from 'react'
import contexto from '../context/Contexto'
import { Navigate } from 'react-router-dom'

const RutasPrivadas = ({children}) => {

   const {estado} = useContext(contexto)
   return (estado)
      ? children
      : <Navigate to = 'login'/>

}

export default RutasPrivadas