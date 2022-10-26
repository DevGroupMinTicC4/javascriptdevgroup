import "./App.css";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import NavBarAdmin from "./components/NavBarAdmin"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Productos from "./components/Productos";
import Footer from "./components/Footer";
import { Tabla } from "./components/Tabla";
import { Ventas } from "./components/Ventas";

function App() {
  const [productos,setProductos]=useState([
    {
      id:1,
      img:'air',
      nombre:"Air Force One",
      descripcion:"Las zapatillas Air Force 1 son un icono de estilo y perfección. Descubre nuestras colecciones.",
      precio:"25"
    },
    {
      id:2,
      img:'hoddies',
      nombre:"Colección de abrigos",
      descripcion:"Colección de abrigos de varios colores para hombre y mujer de todas las tallas, S, M, XL, XXL",
      precio:"15"
    },
    {
      id:3,
      img:'gafas',
      nombre:"Gafas de sol",
      descripcion:"NIEEPA Gafas de sol polarizadas deportivas para hombre con marco cuadrado NP1007",
      precio:"25"
    },
    {
      id:4,
      img:'buzo',
      nombre:"Buzo cuello redondo",
      descripcion:"oklama Cuello redondo exclusivo de Union X The Big Steppers Tour de algodon",
      precio:"25"
    },
    {
      id:5,
      img:'nirvana',
      nombre:"Camisa nirvana para mujer",
      descripcion:"Camiseta manga corta print Nirvana Tallas XS, M, S, L",
      precio:"50"
    },
    {
      id:6,
      img:'bolso',
      nombre:"Bolso de cuero",
      descripcion:"Bolso asa cadena efecto cocodrilo - Mas vendidos",
      precio:"45"
    },
    {
      id:7,
      img:'abrigo',
      nombre:"Abrigo Trench - Mujer",
      descripcion:"Abrigo trench largo efecto suede Tallas XS, M, L",
      precio:"80"
    },
    {
      id:8,
      img:'set',
      nombre:"Sets de pendientes",
      descripcion:"Set 9 pendientes cascada pedrería color dorado",
      precio:"100"
    },
    {
      id:9,
      img:'puffy',
      nombre:"Cazadora puffy",
      descripcion:"Cazadora puffy pana Tallas S, M, L, XL en varios colores",
      precio:"20"
    },
    {
      id:10,
      img:'pantalones',
      nombre:"Pantalón wide",
      descripcion:"Pantalón wide cargo hilo contraste disponoble en 4 colores",
      precio:"30"
    },
    {
      id:11,
      img:'sudadera',
      nombre:"Sudadera Rolling Stones",
      descripcion:"Sudadera print Rolling Stones Tallas XS, S, M, L, XS",
      precio:"100"
    },
    {
      id:12,
      img:'zapatillas',
      nombre:"Zapatillas monocolor",
      descripcion:"Zapatillas monocolor hombre Tallas 36 en adelante",
      precio:"120"
    }
  ])
  const [ventas,setVentas]=useState([{
    comprador:"juan perez",
    cedula:"1018469823",
    productos:[{
      producto:productos[0],
      cantidad:2,
    }]
  },
  {
    comprador:"santiago canal",
    cedula:"30730567",
    productos:[{
      producto:productos[8],
      cantidad:1,
    }]
  }
  ])
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={[<NavBar />, <Inicio />, <Footer/>]} />
            <Route path="/home" element={[<NavBar />, <Productos productos={productos}/>, <Footer/>]}></Route>
            <Route path='/admin' element={[<NavBarAdmin/>,<Tabla productos={productos}/>,<Footer/>]}></Route>
            <Route path='/ventas' element={[<NavBarAdmin/>,<Ventas ventas={ventas}/>]}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
