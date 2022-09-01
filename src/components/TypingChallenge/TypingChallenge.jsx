import React from "react";
import './TypingChallenge.css';

const TypingChallenge = ({ selectedParagraph }) => {
    return ( 
        <div className="typing-challenge">
            <div className="time-container">
                <p className="timer">00:60</p>
                <p className="timer-info">Start typing to start the test</p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                        <div className="textarea test-paragraph">
                            {selectedParagraph}
                        </div>
                </div>

                <div className="textarea-right">
                        <textarea 
                               className="textarea"
                               placeholder="start typing here"
                        >

                        </textarea>
                </div>
            </div>
        </div>
     );
}
 
export default TypingChallenge;