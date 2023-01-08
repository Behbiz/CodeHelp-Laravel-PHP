import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import EditSelect from '../components/select/EditSelect';


function Edit() {
  return (
    
    <div className="App">
      <Navbar/>
        <EditSelect/>
      <Footer/>
    </div>
  );
}

export default Edit;