import React from "react";
import './Footer.css';
import codeLink from './../../assets/coding.png';

const Footer = () => {
    return ( 
        <div className="footer-container">
            <a href="https://github.com/Sy-Cheikh/TypeHub" 
               className="footer-link"
               target="_blank"
               rel="noreferrer"
               ><div className="footer-img-container">
                   <img src={codeLink} alt="footer-img" className="footer-img" />
                   <div className="overlay">Watch the Code !</div>
                </div>
            </a>
        </div>
     );
}
 
export default Footer;