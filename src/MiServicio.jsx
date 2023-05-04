import React from "react";

function MiServicio({data, setTotal}) {

    // Cuando quieres usar el evento del click y añadirle un parámetro la función se construye de esta forma
    const comprar = (price) => (event) => {
        // event hace referencia a la variable que gestiona el hook, es decir en este caso total que se encuentra en el main
        console.log(event);
        setTotal((e) => e+price)
        event.target.parentNode.parentNode.parentNode.style.display="none";
    }

    const servicios = data.map((e => 
        <div key={e.id} className="card" style={{ backgroundColor: e.color }}>
            <h1 class = "cyberpunk-font">{e.name}</h1>
            <image src={e.image}></image>
            <div className="titulo">Precio:</div>
            <div className="precio">
            {e.price}€
            <div>
                <button onClick={comprar(e.price)}>Comprar</button>
            </div>
            </div>
        </div>
    ))

    return <>

    {servicios}
        
    </>;
}

export default MiServicio;
