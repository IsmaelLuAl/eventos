import React, { useContext } from 'react'
import Contexto2 from './contexto/Contexto2'

function Profesora() {

   const {alumno} = useContext(Contexto2)
   const idioma = alumno[3].idioma
   const imagen = `../images/${alumno[idioma].foto}`

   return (
      <>
         <div className='profesora'>
            <h1>{alumno[idioma].boton1}:</h1>
            <div className='fotoBox'>
               <img className='imagenProfesora' src = {imagen}></img>
            </div>
            <div className='nombre'>{alumno[idioma].nombre}</div>
         </div>
      </>
      
   )
}

export default Profesora