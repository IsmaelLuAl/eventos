import React from 'react'
import types from './types'

//state estado antes de que se le aplique un cambio y action es la acción a ejecutar a ese estado
const miReducer = (state = {}, action) => {

   switch (action.type) {
      case types.login:
         return {
            estado: true
         }
      case types.logout:
         return {
            estado: false
         }
      default: 
         return state
   }
   
   return (
      <>
      </>
   )
}

export default miReducer