import React from "react";
import './LandingPage.css';
import sideImg from './../../assets/hero.png';
import Typewriter from 'typewriter-effect';
const LandingPage = () => {
    return ( 
        <div className="landing-container">
                <div data-aos="fade-right" className="landing-left">
                    <h1 className="landing-header">Can you type ...</h1>
                    <div className="typewriter-container">
                    <Typewriter
                            options={{
                                strings: ['Fast?', 'Correct?', 'Quick?', 'Go...'],
                                autoStart: true,
                                loop: true,
                            }}
                     />
                    </div>
                </div>

                <div data-aos="fade-up-right" className="landing-right">
                    <img src={sideImg} alt="hero" className="sideImg" />
                </div>
        </div>
     );
}
 
export default LandingPage;