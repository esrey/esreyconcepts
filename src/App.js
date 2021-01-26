import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar.js';
import Header from './components/layout/Header.jsx';
import 'materialize-css/dist/css/materialize.min.css';
import iphone from './images/devices/iphone.png';



function App() {
  return (
    <div>

      <Navbar/>
      <Header/>


    </div>
  );
}

export default App;
