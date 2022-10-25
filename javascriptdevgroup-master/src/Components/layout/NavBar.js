import React from "react";
import ropa from "../../assets/img/laundry.png"


function NavBar() {
  return (
    <div className="container">
      <img src={ropa} className="nav-img" alt="logo"></img>
      <nav>
        <ul className="nav-menu">
          <li><a href='http://localhost:3001'>Inicio</a></li>
          <li><a href='http://localhost:3001'>Productos</a></li>
          <li><a href='http://localhost:3001'>Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
