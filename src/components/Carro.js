import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "../stylesheets/carro.module.css"
import {
    Table,
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    FormGroup,
    Input,
    Label,
    ModalFooter
  } from "reactstrap";

function Carro({carrito, agregarVenta, onCarrito}){
    let sumatoria=0
    for(let i=0;i<carrito.length;i++){
      sumatoria=sumatoria+parseFloat(carrito[i].precio)
    }
    const [nombre,setNombre]=useState("");
    const [cedula,setCedula]=useState("");
    const [direccion,setDireccion]=useState("");
    const [pago,setPago]=useState("");
    const [abierto,setAbierto]=useState("");
    function abrir(){
        setAbierto((actual) => {
            if (actual === true) {
                return false;
            } else {
                return true;
            }
        });
      }
    
    return(
    <>
      {
        sumatoria ==0 ?<div className={s.carrocontainer}>
        <h3>No hay ningún producto en el carro </h3>
        <h3 className={s.margin}>Haz click en el siguiente enlace para agregar productos</h3>
        <Link to="/home" className={s.comprarp}>Compra ahora</Link>
        </div>:
        (<>
        <h2>ventas totales = {sumatoria}</h2>
        <Button onClick={abrir}>ir a pagar</Button>
        <Modal isOpen={abierto}>
          <ModalHeader>datos venta</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="nombre del usuario ">nombre del usuario</Label>
              <Input
                type="text"
                id="nombre del usuario"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              ></Input>
               <FormGroup>
              <Label for="cedula ">Cedula</Label>
              <Input
                type="number"
                id="cedula"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
              ></Input>
            </FormGroup>
            </FormGroup>
            <FormGroup>
              <Label for="direccion">direccion</Label>
              <Input
                type="text"
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup>
                <Label for="forma de pago">forma de pago</Label>
                <select name="favoriteOnly" value={pago} onChange={(e)=>setPago(e.target.value)} id="favoriteOnly">
                    <option>PSE</option>
                    <option>CREDITO</option>
                </select>
            </FormGroup>
            <FormGroup>
                <Label for="productos a pagar">producots a comprar</Label>
                {
                    carrito.map((dato,i)=> (
                        <div className={s.conp}>
                            <div>
                                <p>nombre : {dato.nombre}</p>
                            </div>
                            
                        </div>
                    ))   
                }
            </FormGroup>
            <FormGroup>
                <Label>Total a pagar {sumatoria} $</Label>
            </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Link to="/home"
              onClick={() => {
                abrir();
                agregarVenta(nombre,cedula,direccion,carrito,sumatoria,pago)
              }}
              color="success"
            >Comprar
            </Link>
          </ModalFooter>
        </Modal>
        <div className={`container ${s.tabla}`}>
            <br />
            <h1>tus compras</h1>
            <br />
        <Table>
          <thead className="text-light">
            <tr>
              <th>img</th>
              <th>Producto</th>
              <th>Precio </th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody className="text-light">
            {carrito.map((dato) => (
              <tr key={dato.id}>
                <td>
                  <img
                    className={s.imagens}
                    src={require(`../assets/img/${dato.img}.jpg`)}
                    alt="Air Force One"
                  />
                </td>
                <td>{dato.nombre}</td>
                <td>{dato.precio} $</td>
                <td><Button onClick={()=>onCarrito(dato.id)} color="danger">
                    Eliminar
                </Button>
                {"  "}
                <Button color="danger">-1</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      </>)
      }
        
   </>         
    
    )
}

export default Carro;
