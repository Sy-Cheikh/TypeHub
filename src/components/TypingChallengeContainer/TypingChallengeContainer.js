import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import './TypingChallengeContainer.css';


const TypingChallengeContainer = ({
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
        <div className="typing-challenge-container">
             {/*  Details Section */}

             <div className="details-container">
                {/* Words Typed */}
                    <ChallengeDetailsCard cardName="Words" cardValue={words}/>

                {/* Character Typed */}
                <ChallengeDetailsCard cardName="Character" cardValue={characters}/>


                {/* Speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm}/>
             </div>
             
             {/* The real Chall */}
             <div className="typewriter-container">
                <TypingChallenge 
                     selectedParagraph={selectedParagraph} 
                     timeRemaining={timeRemaining} 
                     timeStarted={timeStarted}
                     testInfo={testInfo}
                     handleUserInput={handleUserInput}
                />
             </div>
        </div>
     );
}
 
export default TypingChallengeContainer;