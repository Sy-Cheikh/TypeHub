import React from "react";
import './NavBar.css';
import logo from './../../assets/logo.png';

const NavBar = () => {

    return (  
        <div className="nav-container">
            <div className="nav-left">
              <img src={logo} alt="logo" className="logo-im" />
              <p className="logo-text">TypeHub</p>
            </div>

        </div>
    );
}
 
export default NavBar;