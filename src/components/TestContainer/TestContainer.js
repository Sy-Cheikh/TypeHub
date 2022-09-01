import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import './TestContainer.css'
const TestContainer = ({
         words, 
         characters, 
         wpm,
         selectedParagraph,
         timeRemaining,
         timeStarted,
         testInfo,
         handleUserInput
    }) => {
    
    return ( 
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-container">
                        <TypingChallengeContainer 
                        
                                selectedParagraph={selectedParagraph} 
                                timeStarted={timeStarted} 
                                timeRemaining={timeRemaining} 
                                words={words} 
                                characters={characters} 
                                wpm={wpm}
                                testInfo={testInfo}
                                handleUserInput={handleUserInput}
                       />
                   </div>
                ) : (
                     <div className="try-again-cont">
                        <TryAgain words={words} characters={characters} wpm={wpm}/>
                     </div> 
                
                )
                
            }

            
            
        </div>
     );
}
 
export default TestContainer;
