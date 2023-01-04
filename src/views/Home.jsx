import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Login from '../components/login/Login';

function Home() {
  return (
    
    <div className="App">
      <Navbar/>
        <Login/>
      <Footer/>
    </div>
  );
}

export default Home;
