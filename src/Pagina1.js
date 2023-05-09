import React, { useContext } from 'react'
import { Contexto } from './contexto/Contexto'

function Pagina1() {

   // Esta linea lo que hace es que accedamos y nos traigamos los valores que hay en el contexto
   // En el useContext hay que especificar a que contexto nos estamos refiriendo. En este caso el nuestro se llama "Contexto"
   // Se accede al contexto a través del useContext de React y lo que encuentra lo mete dentro de color
   const {color} = useContext(Contexto)

   return (
      <div className='hijo' style={{background: color}}>
         Pagina1
      </div>
   )
}

export default Pagina1