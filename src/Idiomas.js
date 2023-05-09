import React, { useContext } from 'react'
import { Controller } from './contexto/Controller'

function Idiomas() {

   // const {idiomas} = useContext(Controller)

   return (
      <div className='idiomas'>
         <div className='bandera'>
            <img src='../images/spain.jpg'></img>
         </div>
         <div className='bandera'>
            <img src='../images/uk.png'></img>
         </div>
         <div className='bandera'>
            <img src='../images/francia.png'></img>
         </div>
      </div>
   )
}

export default Idiomas