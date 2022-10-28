import React from "react";
import { Link } from "react-router-dom";
import ropa from "../assets/img/laundry.png"
import "../stylesheets/navBar.css";

function NavBar() {
  return (
    <div className="containers">
      <img src={ropa} className="nav-img"></img>
      <nav>
        <ul className="nav-menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/home">Productos</Link></li>
          <li><Link to="/carro"><img src={require('../assets/img/carrito-de-compras.png')} className="carrito"></img></Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;