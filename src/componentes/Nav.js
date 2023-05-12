import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
   return (
      <nav>
         <NavLink className = { ({isActive}) => (isActive ? "activado" : null)} to = "/">Página 1</NavLink>
         <NavLink to = "/pagina2">Página 2</NavLink>
         <NavLink to = "/pagina3">Página 3</NavLink>
      </nav>
   )
}
