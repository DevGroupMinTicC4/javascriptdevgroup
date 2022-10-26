import "./App.css";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Productos from "./components/Productos";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={[<NavBar />, <Inicio />, <Footer/>]} />

            <Route path="/home" element={[<NavBar />, <Productos />, <Footer/>]}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
