import React, { useState } from "react";
import s from "../stylesheets/tabla.module.css";
import {
  Table,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  Input,
  Label,
  ModalFooter,
} from "reactstrap";

export const Tabla = ({ productos, onClose, editar,crear }) => {
  const [abierto, setAbierto] = useState(false);
  const [abierto2, setAbierto2] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [img, setImg] = useState("");
  const [id, setId] = useState("");
  function abrirModal(dato) {
    console.log(dato);
    setNombre(dato.nombre);
    setDescripcion(dato.descripcion);
    setPrecio(dato.precio);
    setId(dato.id);
    setImg(dato.img);
    setAbierto((actual) => {
      if (actual == true) {
        return false;
      } else {
        return true;
      }
    });
  }
  function abrir(){
    setAbierto2((actual) => {
      if (actual == true) {
        return false;
      } else {
        return true;
      }
    });
  }
  return (
    <>
      <div className={`container ${s.tabla}`}>
        <br />
        <h1>Tabla de productos</h1>
        <br />
        <Button onClick={abrir} color="success">insertar un nuevo producto</Button>
        <Modal isOpen={abierto2}>
          <ModalHeader>crear Producto</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="nombre">nombre del producto</Label>
              <Input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="precio">Precio</Label>
              <Input
                type="text"
                id="Precio"
                value={`${precio}`}
                onChange={(e) => setPrecio(e.target.value)}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="descripcion">Descripcion</Label>
              <br></br>
              <textarea
                className="descripcion"
                rows="3"
                cols="50"
                type="text"
                id="descripcion"
                onChange={(e) => setDescripcion(e.target.value)}
                value={`${descripcion}`}
              ></textarea>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                crear({
                  id: productos.length+1,
                  nombre: nombre,
                  precio: precio,
                  descripcion: descripcion,
                });
                abrir();
              }}
              color="success"
            >
              crear
            </Button>
            <Button onClick={abrir} color="success">
              cerrar
            </Button>
          </ModalFooter>
        </Modal>

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
            {productos.map((dato) => (
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
                <td>
                  <Button onClick={() => abrirModal(dato)} color="success">
                    Editar
                  </Button>
                  <Modal isOpen={abierto}>
                    <ModalHeader>editar</ModalHeader>
                    <ModalBody>
                      <FormGroup>
                        <Label for="nombre">nombre del producto</Label>
                        <Input
                          type="text"
                          id="nombre"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                        ></Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="precio">Precio</Label>
                        <Input
                          type="text"
                          id="Precio"
                          value={`${precio}`}
                          onChange={(e) => setPrecio(e.target.value)}
                        ></Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="descripcion">Descripcion</Label>
                        <br></br>
                        <textarea
                          className="descripcion"
                          rows="3"
                          cols="50"
                          type="text"
                          id="descripcion"
                          onChange={(e) => setDescripcion(e.target.value)}
                          value={`${descripcion}`}
                        ></textarea>
                      </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        onClick={() => {
                          editar({
                            id: id,
                            nombre: nombre,
                            precio: precio,
                            descripcion: descripcion,
                            img: img,
                          });
                          abrirModal();
                        }}
                        color="success"
                      >
                        editar
                      </Button>
                      <Button onClick={abrirModal} color="success">
                        cerrar
                      </Button>
                    </ModalFooter>
                  </Modal>{" "}
                  <Button onClick={() => onClose(dato.id)} color="danger">
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
