import React from "react";
import '../stylesheets/carro.css';

function Carro(){
    return(
        <>
            <div className="carro-container">
                <h3>No hay ningún producto en el carro :(</h3>
                <h3 className="margin">Haz click en el siguiente enlace para agregar productos</h3>
                <a href="http://localhost:3000/home" className="comprar-p">Compra ahora</a>
            </div>
        </>
    )
}

export default Carro;