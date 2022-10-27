import React from "react";
import "../stylesheets/productos.css";
import { Producto } from "./Producto";

function Productos({productos}){
  // console.log(productos)
    return(
        <>
          <div className="titulo">
            <h3>Nuestros productos</h3>
          </div>
          <section className="productos-container">
            {
              productos.map(p=><Producto 
                img={p.img}
                nombre={p.nombre}
                descripcion={p.descripcion}
                precio={p.precio}
              />)
            }
            {/* <article className="card">
              <img className="imagen" src={require('../assets/img/air.jpg')} alt="Air Force One"/>
              <div className="card-info">
                <h3>Air Force One</h3>
                <p className="descripcion">Las zapatillas Air Force 1 son un icono de estilo y perfección. Descubre nuestras colecciones.</p>
                <p className="precio">25$</p>
                <button className="button">Agregar al carro</button>
              </div>
            </article>
            <article className="card">
              <img className="imagen" src={require('../assets/img/hoddies.jpg')} alt="Hoddie"/>
              <div className="card-info">
                <h3>Colección de abrigos</h3>
                <p className="descripcion">Colección de abrigos de varios colores para hombre y mujer de todas las tallas, S, M, XL, XXL</p>
                <p className="precio">15$</p>
                <button className="button">Agregar al carro</button>
              </div>
            </article>
            <article className="card">
              <img className="imagen" src={require('../assets/img/gafas.jpg')} alt="Gafas de sol"/>
              <div className="card-info">
                <h3>Gafas de sol</h3>
                <p className="descripcion">NIEEPA Gafas de sol polarizadas deportivas para hombre con marco cuadrado NP1007</p>
                <p className="precio">25$</p>
                <button className="button">Agregar al carro</button>
              </div>
            </article>
            <article className="card">
              <img className="imagen" src={require('../assets/img/buzo.jpg')} alt="Buzo"/>
              <div className="card-info">
                <h3>Buzo cuello redondo</h3>
                <p className="descripcion">oklama Cuello redondo exclusivo de Union X The Big Steppers Tour de algodon</p>
                <p className="precio">25$</p>
                <button className="button">Agregar al carro</button>
              </div>
            </article>
            <article className="card">
              <img className="imagen" src={require('../assets/img/nirvana.jpg')} alt="Camisa Nirvana"/>
              <div className="card-info">
                <h3>Camisa nirvana para mujer</h3>
                <p className="descripcion">Camiseta manga corta print Nirvana Tallas XS, M, S, L</p>
                <p className="precio">50$</p>
                <button className="button">Agregar al carro</button>
              </div>
            </article>
            <article className="card">
              <img className="imagen" src={require('../assets/img/bolso.jpg')} alt="Bolso"/>
              <div className="card-info">
                <h3>Bolso de cuero</h3>
                <p className="descripcion">Bolso asa cadena efecto cocodrilo - Mas vendidos</p>
                <p className="precio">45$</p>
                <button className="button">Agregar al carro</button>
              </div>
            </article>
            <article className="card">
              <img className="imagen" src={require('../assets/img/abrigo.jpg')} alt="Abrigo"/>
              <div className="card-info">
                <h3>Abrigo Trench - Mujer</h3>
                <p className="descripcion">Abrigo trench largo efecto suede Tallas XS, M, L</p>
                <p className="precio">80$</p>
                <button className="button">Agregar al carro</button>
              </div>
            </article>
            <article className="card">
              <img className="imagen" src={require('../assets/img/set.jpg')} alt="Set accesorios"/>
              <div className="card-info">
                <h3>Sets de pendientes</h3>
                <p className="descripcion">Set 9 pendientes cascada pedrería color dorado</p>
                <p className="precio">100$</p>
                <button className="button">Agregar al carro</button>
              </div>
            </article>
            <article className="card">
              <img className="imagen" src={require('../assets/img/puffy.jpg')} alt="Abrigo puffy"/>
              <div className="card-info">
                <h3>Cazadora puffy</h3>
                <p className="descripcion">Cazadora puffy pana Tallas S, M, L, XL en varios colores</p>
                <p className="precio">20$</p>
                <button className="button">Agregar al carro</button>
              </div>
            </article>
            <article className="card">
              <img className="imagen" src={require('../assets/img/pantalones.jpg')} alt="Pantalones"/>
              <div className="card-info">
                <h3>Pantalón wide</h3>
                <p className="descripcion">Pantalón wide cargo hilo contraste disponoble en 4 colores</p>
                <p className="precio">30$</p>
                <button className="button">Agregar al carro</button>
              </div>
            </article>
            <article className="card">
              <img className="imagen" src={require('../assets/img/sudadera.jpg')} alt="Sudadera"/>
              <div className="card-info">
                <h3>Sudadera Rolling Stones</h3>
                <p className="descripcion">Sudadera print Rolling Stones Tallas XS, S, M, L, XS</p>
                <p className="precio">100$</p>
                <button className="button">Agregar al carro</button>
              </div>
            </article>
            <article className="card">
              <img className="imagen" src={require('../assets/img/zapatillas.jpg')} alt="Zapatillas"/>
              <div className="card-info">
                <h3>Zapatillas monocolor</h3>
                <p className="descripcion">Zapatillas monocolor hombre Tallas 36 en adelante</p>
                <p className="precio">120$</p>
                <button className="button">Agregar al carro</button>
              </div>
            </article> */}
          </section>
        </>
    )
}

export default Productos;