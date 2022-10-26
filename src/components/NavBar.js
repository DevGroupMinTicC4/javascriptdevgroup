import React from "react";
import ropa from "../assets/img/laundry.png"
import "../stylesheets/navBar.css";


function NavBar() {
  return (
    <div className="containers">
      <img src={ropa} className="nav-img"></img>
      <nav>
        <ul className="nav-menu">
          <li><a href="http://localhost:3000/">Inicio</a></li>
          <li><a href="http://localhost:3000/home">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;