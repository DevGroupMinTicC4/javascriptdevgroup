
import './App.css';
import  Navbar  from "./Components/layout/NavBar";
import './NavBar.css'
import Inicio from './Components/Inicio'
import './Login.css'
import  Home  from './Components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Footer} from './Components/layout/Footer';
import React,{ useState } from 'react';




function App() {
  const [productos,setProductos]=useState([{key:"1",nombre:"nike low vision",img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deportivoscarvajal.com%2Fproducto%2Fcourt-vision-low%2F&psig=AOvVaw1UtxXduNkcz0sFJ8xlvv4E&ust=1666655058023000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjDjanE9_oCFQAAAAAdAAAAABAE",precio:"220.000"},{key:"2",nombre:"nike low vision",img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deportivoscarvajal.com%2Fproducto%2Fcourt-vision-low%2F&psig=AOvVaw1UtxXduNkcz0sFJ8xlvv4E&ust=1666655058023000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjDjanE9_oCFQAAAAAdAAAAABAE",precio:"220.000"},{key:"3",nombre:"nike low vision",img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deportivoscarvajal.com%2Fproducto%2Fcourt-vision-low%2F&psig=AOvVaw1UtxXduNkcz0sFJ8xlvv4E&ust=1666655058023000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjDjanE9_oCFQAAAAAdAAAAABAE",precio:"220.000"}])
  return (
    <Router>
      <div className='App' >
        <div >
          <Routes>
            <Route path='/home' 
            element=
            {[
              <Navbar/>,
              <Home productos={productos}/>,
              <Footer/>
            ]}
            />
            <Route path='/' 
            element=
            {
              [
              <Inicio/> 
              ]
            }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
