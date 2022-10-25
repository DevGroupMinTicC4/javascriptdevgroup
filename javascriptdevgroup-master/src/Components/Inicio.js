import React from "react";
import "../Login.css";

function Inicio() {
  return (
    <div className="body">
      <div className="login">
        <h3>
          Soy <a href='http://localhost:3000/Home'>Usuario</a> o <a href='http://localhost:3000'>Administrador</a>
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