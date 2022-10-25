import React, { Fragment } from 'react'
import tennis from '../assets/img/tennis.jpg'

const Producto = ({img,precio,nombre}) => {
  return (
    <Fragment>
        <div className='card p-3 rounded'>
            <img className='card-img-top mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldYlDC1mktUZ5E_d8apavK61RVYw_2kxp5g&usqp=CAU" alt='producto'></img>
                <div className='card-body d-flex flex-column'>
                    <h5 id='titulo_producto'>
                        <a href='http://localhost:3000/home'>{nombre}</a>
                    </h5>
                    <p className='card-text text-dark'>{precio}</p>
                    <a href='http://localhost:3000' id='ver-producto' className='btn btn-block bg-primary' >ver detalles del producto</a>
                </div>
        </div>
    </Fragment>
    
  )
}

export default Producto;
