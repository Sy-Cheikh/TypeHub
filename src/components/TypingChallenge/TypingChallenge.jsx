import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import './TypingChallenge.css';

const TypingChallenge = ({ 
    
    timeRemaining,
    timeStarted,
    testInfo,
    handleUserInput
 }) => {
   
    return ( 
        <div className="typing-challenge">
            <div className="time-container">
                <p className="timer">
                    00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}</p>
                <p className="timer-info">
                    {!timeStarted && "Start typing to start the test" }
                </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                        <div className="textarea test-paragraph">
                            {/* {selectedParagraph} */}
                            {
                                testInfo.map((letterInfo,index) => {
                                    return <TestLetter 
                                                key={index}
                                                individualLetterInfo={letterInfo}
                                            />;
                                })
                            }
                        </div>
                </div>

                <div className="textarea-right">
                        <textarea 
                               onChange={(e) => handleUserInput(e.target.value)}
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