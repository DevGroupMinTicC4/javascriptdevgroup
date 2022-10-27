import React from 'react'
import s from '../stylesheets/tabla.module.css'
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'
export const Tabla = ({productos}) => {
  console.log(productos)
  return (
  <>
    <div className={`container ${s.tabla}`}>
      <br/>
        <h1>Tabla de productos</h1>
          <br />
          <Button color='success'>insertar un nuevo producto</Button>
          <br />
          <Table>
            <thead className='text-light'>
              <tr>
                <th>img</th>
                <th>Producto</th>
                <th>Precio </th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className='text-light'>
              {productos.map((dato) => (
                <tr key={dato.id}>
                  <td><img className={s.imagens} src={require(`../assets/img/${dato.img}.jpg`)} alt="Air Force One"/></td>
                  <td>{dato.nombre}</td>
                  <td>{dato.precio} $</td>
                  <td>
                    <Button color="success">Editar</Button>
                    {" "}
                    <Button color="danger">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
    </div>
  </>
)}
