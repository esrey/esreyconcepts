import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import List from './components/layout/List.jsx';
import Header from './components/layout/Header.jsx';
import 'materialize-css/dist/css/materialize.min.css';






function App() {
  return (
    <div class="App">

      <Navbar/>
      <Header/>
      <List/>


    </div>
  );
}

export default App;
