import React, { useContext } from 'react'
import Profesora from './Profesora'
import Ubicacion from './Ubicacion'
import Contexto2 from './contexto/Contexto2'

function Content() {

   const {alumnos} = useContext(Contexto2)
   console.log(alumnos);

   return (
      <>
         <h1>Titulo</h1>
         <h2>Subtitulo</h2>
         <div className='botones'>
            <button>Boton 1</button>
            <button>Boton 2</button>
         </div>
         <Profesora />
         <Ubicacion />
      </>
      
   )
}

export default Content