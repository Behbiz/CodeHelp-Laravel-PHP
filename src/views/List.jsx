import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Citas from '../components/citas/Citas';
import Footer from '../components/footer/Footer';
import "../app.css"

function List() {
  return (
    
    <div className="App">
      <Navbar/>
      <Citas/>
      <Footer/>
    </div>
  );
}

export default List;