import React from 'react'
import { useParams } from 'react-router-dom'

function ModeloRey() {

   const {rey} = useParams();
   const reyCompleto = rey.substring(0, 1).toUpperCase() + rey.substring(1).toLowerCase()

   return (
      <div>
         <img alt = "" src = {`https://www.html6.es/img/rey_${rey}.png`} />
         <h1>{reyCompleto}</h1>
      </div>
   )
}

export default ModeloRey