import React from "react";
import ropa from "../assets/img/laundry.png"
import "../stylesheets/navBar.css";

function NavBarAdmin() {
  return (
    <div className="containers">
      <img src={ropa} className="nav-img" alt="logo"></img>
      <nav>
        <ul className="nav-menu">
          <li><a href='http://localhost:3000/'>Principal</a></li>
          <li><a href='http://localhost:3000/admin'>Tabla</a></li>
          <li><a href='http://localhost:3000/ventas'>Ver ventas </a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarAdmin;
