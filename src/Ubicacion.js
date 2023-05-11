import React from 'react'
import Contexto2 from './contexto/Contexto2'
import { useContext } from 'react'

function Ubicacion() {

   const {alumno} = useContext(Contexto2)
   const idioma = alumno[3].idioma

   return (
      <div className='ubicacion'>
         <h1>{alumno[idioma].boton2}</h1>
         <div className='texto'>
            {alumno[idioma].direccion}
         </div>
      </div>
   )
}

export default Ubicacion