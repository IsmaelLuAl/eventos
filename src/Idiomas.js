import React, { useContext } from 'react'
import { Controller } from './contexto/Controller'
import Contexto2 from './contexto/Contexto2'

function Idiomas() {

   const {setAlumno} = useContext(Contexto2)
   const {alumno} = useContext(Contexto2)


   const sustitucion = (posicion) => {
      setAlumno(
         alumno.map((dato, indice) => 
         indice == 3
         ? {...dato, idioma: posicion}
         : {...dato}
         )
      )
   }

   const cambio1 = () => {
      sustitucion(0)
   }

   const cambio2 = () => {
      sustitucion(1)
   }

   const cambio3 = () => {
      sustitucion(2)
   }

   return (
      <div className='idiomas'>
         <div className='bandera'>
            <img src='../images/spain.jpg' onClick={cambio1}></img>
         </div>
         <div className='bandera'>
            <img src='../images/uk.png' onClick={cambio2}></img>
         </div>
         <div className='bandera'>
            <img src='../images/francia.png' onClick={cambio3}></img>
         </div>
      </div>
   )
}

export default Idiomas