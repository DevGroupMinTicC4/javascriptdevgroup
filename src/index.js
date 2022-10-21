import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar";
import "./NavBar.css";
import "./App.css";
import Inicio from "./Inicio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <NavBar/>
    <Inicio/>
  </>
);
