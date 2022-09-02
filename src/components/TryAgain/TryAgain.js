import React from "react";
import './TryAgain.css';
import refresh from './../../assets/refresh.png';
import facebook from './../../assets/facebook.png';
import twitter from './../../assets/twitter-2.png';

const TryAgain = ({words, characters, wpm, startAgain}) => {
    return ( 
            <div className="try-again-container">
                  <h1>Test Results</h1>
                  <div className="result-container">
                        <p>
                            <b>characters:</b>{characters}
                        </p>

                        <p>
                            <b>words:</b>{words}
                        </p>

                        <p>
                            <b>Speed:</b>{wpm} wpm
                        </p>
                  </div>

                  <div>
                        <button onClick={() =>  startAgain()} className="end-buttons start-again-btn">
                            <img src={refresh} alt="" className="refresh-img" />
                        </button>

                        <button onClick={() => {
                                window.open("https://www.facebook.com/sharer/sharer.png?u=user", 
                                        "facebook-share-dialog","width=800,height=600"
                                        );

                                }}
                                className="end-buttons share-btn">
                                <img src={facebook} alt="" className="fb-img" />
                            
                        </button>

                        <button onClick={() => {
                                window.open("https://twitter.com/intent/tweet?text=anything", 
                                        "Twitter","width=800,height=600"
                                        );

                                }}
                        
                              className="end-buttons tweet-btn">
                              <img src={twitter} alt="" className="twitter-img" />

                        </button>

                        
                  </div>

            </div>
       )
}
 
export default TryAgain;