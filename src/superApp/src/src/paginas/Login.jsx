import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import contexto from '../context/Contexto'

const Login = () => {

   const {logearme} = useContext(contexto)
   //Nevagacion sirve para usar todas las propiedades del useNavigate
   const navegacion = useNavigate()
   //Esta función es la que se aplica en el onClick de login
   const login = () => {
      //Esta función elimina el hilo de paginas que hemos visitado y la reemplaza por la que nosotros le indiquemos, haciendo así que no podamos retrodecer a la anterior
      navegacion('/', {replace: true})
      logearme('jab')
   }
   return (
      <>
         <h1>Pantalla de login</h1>
         <button onClick={login}>Login</button>
      </>
      
   )
}

export default Login