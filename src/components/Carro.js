import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/carro.css';

function Carro(){
    return(
        <>
            <div className="carro-container">
                <h3>No hay ningún producto en el carro :(</h3>
                <h3 className="margin">Haz click en el siguiente enlace para agregar productos</h3>
                <Link to="/home" className="comprar-p">Compra ahora</Link>
            </div>
        </>
    )
}

export default Carro;