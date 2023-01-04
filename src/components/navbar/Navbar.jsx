import React from "react";
import Logo from '../../Assets/logocode-help.svg'

const Navbar = () => {
    return (
      <div className="Navbar">
      <nav class="navbar navbar-expand-sm bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src={Logo} alt="Logo" className='logo'/>
            </a>
               
            
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">About Us </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Contact</a>
      </li>
    </ul>
        </div>

        </nav>
    </div>
)
};

export default Navbar;