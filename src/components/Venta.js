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
                <h2>Venta #{index}</h2>
            </div>
            <div className="card-body">
                <h5 className="card-title">Comprador: {venta.comprador}</h5>
                <ul>
                    <li>Documento: {venta.cedula}</li>
                    <li>Productos: {venta.productos[0].producto.nombre}</li>
                    <li>Cantidad = {venta.productos[0].cantidad}</li>
                    <li>Total = {venta.productos[0].cantidad*venta.productos[0].producto.precio}$</li>
                </ul>    
            </div>
        </div>
    </div>
  )
}
