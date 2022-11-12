import React from 'react'
import "../stylesheets/productos.css";
export const Producto = ({img,nombre,descripcion,precio, agregarCompra}) => {
    return (
        <>
            <article className="card">
                    <img className="imagen" src={require(`../assets/img/${img}.jpg`)} alt="Air Force One"/>
                    <div className="card-info">
                        <h3>{nombre}</h3>
                        <p className="descripcion">{descripcion}</p>
                        <p className="precio">{precio}$</p>
                        <button className="button" onClick={agregarCompra}>Agregar al carro</button>
                    </div>
            </article>
        </>
    )
    }
