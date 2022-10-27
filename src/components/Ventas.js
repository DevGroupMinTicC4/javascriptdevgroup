import React from 'react'
import { Venta } from './Venta'
import s from '../stylesheets/ventas.module.css'

export const Ventas = ({ventas}) => {
  
  return (
    <div className={s.contenedor}>
      <h1>Ventas</h1>
      <div className={s.ventas}>
        {
          ventas.map((v,i)=><Venta venta={v} index={i}/>)
        }
      </div>
    </div>
    
  )
}
