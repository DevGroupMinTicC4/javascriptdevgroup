import React from "react";
import ReactDOM from "react-dom/client";
import ropa from "./assets/img/laundry.png"


function NavBar() {
  return (
    <div className="container">
      <img src={ropa} className="nav-img"></img>
      <nav>
        <ul className="nav-menu">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
