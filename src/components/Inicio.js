import React from "react";
import "../stylesheets/inicio.css";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="body">
      <div className="login">
        <h3>
          Soy <Link to="/home">Usuario</Link> o{" "}
          {/* Soy <a href="http://localhost:3000/home"></a> o{" "} */}
          <a href="http://localhost:3000/admin">Administrador</a>
        </h3>
        <div className="sesion">
          <form className="form">
            <label form="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Ingrese su nombre"
              autoComplete="none"
              required
            ></input>
            <label form="password">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              required
            ></input>
            <button type="summit" className="form-btn">
              Inciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
