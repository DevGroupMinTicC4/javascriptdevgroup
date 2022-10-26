import React from 'react'
import s from '../stylesheets/venta.module.css'

export const Venta = ({venta, index}) => {
    console.log(venta)
    console.log(index)
    index=index+1;
  return (
    <div className={s.s}>
        <div className={`card text-white bg-success mb-3`}>
            <div className="card-header">
                <h2>venta numero {index}</h2>
            </div>
            <div className="card-body">
                <h5 className="card-title">comprador {venta.comprador}</h5>
                <ul>
                    <li>cedula = {venta.cedula}</li>
                    <li>productos comprados = {venta.productos[0].producto.nombre}</li>
                    <li>cantidad = {venta.productos[0].cantidad}</li>
                    <li>venta total = {venta.productos[0].cantidad*venta.productos[0].producto.precio}$</li>
                </ul>    
            </div>
        </div>
    </div>
  )
}
