import './App.css'
import Colores from './Colores'
import { Datos } from './contexto/Contexto'
import Pagina1 from './Pagina1'
import Pagina2 from './Pagina2'
import Pagina3 from './Pagina3'


function App() {

   return(
      <>
      {/* Datos es como se llama la funcion exportada que hay dentro del contexto */}
      <Datos>
         <div className='App'>
          {/* Las paginas son el componentes que se repite tres veces en la pagina principal */}
            <Pagina1/>
            <Pagina2/>
            <Pagina3/>
         </div>
        {/* Colores es el componente que se encuentra debajo que sirve para cambiar el color de las paginas */}
         <Colores></Colores>
      </Datos>
      </>
   )
}

export default App;