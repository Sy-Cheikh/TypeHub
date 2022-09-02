import React from "react";
import './Footer.css';
import codeLink from './../../assets/coding.png';
import linkdin from './../../assets/linkedin-2.png';
const Footer = () => {
    return ( 
        <div className="footer-parent">
        
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
            <div className="infos-content">
                <p>&copy; Cheikh Sy 
                    <a href="https://www.linkedin.com/in/cheikh-sy/" target="_blank">
                        <img src={linkdin} alt="" className="linkdin" />
                    </a>
                </p>
                
            </div>
        </div>
     );
}
 
export default Footer;