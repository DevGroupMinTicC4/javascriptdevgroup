import "./App.css";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import NavBarAdmin from "./components/NavBarAdmin"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Productos from "./components/Productos";
import Footer from "./components/Footer";
import { Tabla } from "./components/Tabla";
import { Ventas } from "./components/Ventas";
import Carro from "./components/Carro";

function App() {
  const [carrito,setCarrito]=useState([]);
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
  const [ventas,setVentas]=useState([])
  function editar(info){
    let nuevo=productos;
    let obj={
      id:info.id,
      img:info.img,
      nombre:info.nombre,
      descripcion:info.descripcion,
      precio:info.precio
    }
    nuevo.map((p,i)=>{
      if(p.id==info.id){
        nuevo[i]=obj
      }
    })
    setProductos(nuevo)

  }
  function crear(info){
    info.img="defecto";
    let nuevo=[info]
    setProductos((prev)=>[...prev,...nuevo])
  }
  function onClose(id) {
    console.log("entre")
    setProductos(oldProductos => oldProductos.filter((p,i) => i !== id));
  }
  function onCarrito(id) {
    setCarrito(oldProductos => oldProductos.filter(p => p.id !== id));
  }
  function agregarCompra(name){
    // if(carrito.length!=0){
    //   let nuevo=productos.map(p=>{
    //     if(p.cantidad){
    //       delete p.cantidad
    //     }
    //   })
    //   console.log("este es la cantidad " +nuevo[0].cantidad)
    // }

    // console.log("producto "+productos[0].nombre+"cantidad"+productos[0].cantidad)
    // console.log("carrito "+carrito.length)
    //   for(let i =0;i<carrito.length;i++){
    //     if (carrito[i].id==name.id){
    //       name[cantidad]=name.cantidad+1
    //     }
    //   }
    //   if(!name.cantidad){
    //     console.log("primera unidad")
    //     name.cantidad=
        setCarrito(prev=>[...prev,...[name]])
      // }
  }
  function onGo(){
  }
  function menosUno(){

  }
  useEffect(()=>{
    setCarrito([])
    
  },[ventas])
  let contador=0
  function agregarVenta(nombre,cedula,direccion,carrito,sumatoria,pago){
    alert("compra realiza tu pedido estara listo en 15 dias")
    console.log("hola");
    contador=0;
    let info={
      nombre:nombre,
      cedula:cedula,
      direccion:direccion,
      forma:pago,
      productos:carrito,
      total:sumatoria

    }
    console.log(info)
    if(ventas.length>0){
      setVentas((prev) => [...prev,...[info]])
    }else{
      setVentas([info])
    }

  }
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={[<NavBar onGo={onGo}numero=""/>, <Inicio />, <Footer/>]} />
            <Route path="/home" element={[<NavBar/>, <Productos agregarCompra={agregarCompra}  productos={productos} carrito={carrito}/>, <Footer/>]}></Route>
            <Route path='/admin' element={[<NavBarAdmin onGo={onGo}/>,<Tabla  editar={editar} productos={productos} onClose={onClose} crear={crear}/>,<Footer/>]}></Route>
            <Route path='/ventas' element={[<NavBarAdmin onGo={onGo}/>,<Ventas  ventas={ventas}/>]}/>
            <Route path="/carro" element={[<NavBar/>, <Carro menosUno={ menosUno} carrito={carrito} agregarVenta={agregarVenta} onCarrito={onCarrito} />]}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
