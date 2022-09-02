import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import './ChallengeSection.css';

const ChallengeSection = ({ 
    selectedParagraph,
    words, 
    characters, 
    wpm, 
    timeStarted, 
    timeRemaining,
    testInfo,
    handleUserInput,
    startAgain
}) => {
    return ( 
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test now !
            </h1>
            <TestContainer 
                    selectedParagraph={selectedParagraph} 
                    timeStarted={timeStarted} 
                    timeRemaining={timeRemaining} 
                    words={words} 
                    characters={characters} 
                    wpm={wpm}
                    testInfo={testInfo}
                    handleUserInput={handleUserInput}
                    startAgain = { startAgain}
            />
        </div>
     );
}
 
export default ChallengeSection;