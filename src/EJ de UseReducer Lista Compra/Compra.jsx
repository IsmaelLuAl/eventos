import { useReducer, useRef, useState } from "react";

const types={
   menos:'menos',
   mas:'mas',
   eliminar:'eliminar',
   comprar:'comprar'
}

const valorInicial = []

// PARAMS: El action son los valores(type y payload) que recibe el reducer desde donde se llama el dispatch
// PARAMS: El state es el valor del estado inicial antes de que se produzca ningún cambio 
const reducer = (state, action) => {
   console.log("Este es el state");
   console.log(state)
   console.log("Este es el action");
   console.log(action);
   switch(action.type){
      case types.menos:
         return state.map(objeto =>
            (action.payload === objeto.id && objeto.cantidad>1)
            ? {...objeto, cantidad: objeto.cantidad-1}
            : objeto
         )
      case types.mas:
         return state.map(objeto =>
            (action.payload === objeto.id)
            ? {...objeto, cantidad:objeto.cantidad+1}
            : objeto
         )
      case types.eliminar:
         return (state.filter(valor => valor.id !== action.payload))
      case  types.comprar:
         return [...state, action.payload]
      default:
         return state
   }
}

const Compra = () => {
   const inputName = useRef(null)
   const [miProducto, setMiProducto] = useState("");
   const [lista, dispatch] = useReducer(reducer, valorInicial);

   return (
      <>
      <label htmlFor="producto">Producto: </label>
      <input
         id="producto"
         ref={inputName}
         value={miProducto}
         onChange={(e) => setMiProducto(e.target.value)}
      />
      <button className="libre"
         onClick={() => {
            inputName.current.focus()
            setMiProducto("")
            dispatch({type:types.comprar, payload:{id: Date.now(), nombre:miProducto, cantidad: 1}})
         }}
      >
            Añadir
      </button>
      {lista.map((producto) =>
         <div key={producto.id}>
            {producto.nombre} ({producto.cantidad} unidades)
            <button onClick={() => dispatch({type: types.menos, payload: producto.id})}>-</button>
            <button onClick={() => dispatch({type: types.mas, payload: producto.id})}>+</button>
            <button onClick={() => dispatch({type: types.eliminar, payload: producto.id})}>x</button>
         </div>
      )}
      </>
   );
};

export default Compra;
