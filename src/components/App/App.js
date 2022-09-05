import React from "react";
import './App.css';
import NavBar from "../NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import {SAMPLE_PARAGRAPHS} from './../../data/SampleParagraphs';
const totalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9"
const DefaultState = {
    selectedParagraph: "",
    timeStarted: false,
    timeRemaining: totalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: [],


}
class App extends React.Component {
 
    state = DefaultState;

    fetchNewParagraphFallBack = () => {
        const data = SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];
        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
            return{
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });

        this.setState({...DefaultState ,testInfo:testInfo, selectedParagraph:data});
    };
    fetchNewParagraph = () =>{
        fetch(serviceUrl)
            .then(response => response.text())
            .then(data =>{
                const selectedParagraphArray = data.split("");
                const testInfo = selectedParagraphArray.map((selectedLetter) => {
                    return{
                        testLetter: selectedLetter,
                        status: "notAttempted",
                    };
                });

                this.setState({...DefaultState ,testInfo:testInfo, selectedParagraph:data});
                });
    };

    componentDidMount(){
      
       this.fetchNewParagraphFallBack();
        
    };


    startAgain = () => this.fetchNewParagraphFallBack();


    startTimer = () =>{
        this.setState({timeStarted : true});
        const timer = setInterval(() =>{
            if(this.state.timeRemaining > 0){
                // compute WPM
                const timeSpent = totalTime - this.state.timeRemaining;
                const wpm =  
                    timeSpent > 0 
                        ? (this.state.words / timeSpent) * totalTime
                        :0;
                this.setState({
                    timeRemaining: this.state.timeRemaining -1,
                    wpm: parseInt(wpm),
                });
            }else{
                clearInterval(timer);
            }
              
        },1000);
    };

    


    handleUserInput = (inputValue) =>{
        if(!this.state.timeStarted){
            this.startTimer();
        }

        const characters = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = characters - 1;

        if(index < 0){
            this.setState({
                testInfo : [
                    {
                        testLetter : this.state.testInfo[0].testLetter,
                        status: "notAttempted",
                    },
                    ...this.state.testInfo.slice(1),
                ],
                characters,
                words,
            });

            return;
        }

        if(index >= this.state.selectedParagraph.length){
            this.setState({ characters, words, });
            return;

        }

        const testInfo = this.state.testInfo;
        if(!(index === this.state.selectedParagraph.length-1))
                testInfo[index + 1].status = "notAttempted";

        // if he type the correct letter
        const isCorrect = inputValue[index] === testInfo[index].testLetter;

        //update the testInfo
        testInfo[index].status = isCorrect ? "correct" : "incorrect";

        //update the state
        this.setState({
            testInfo,
            words,
            characters
        });
        
    };
    render(){
        
      

        return(
            <div className="app">
                {/*Nav Section*/}
                <NavBar/>

                {/* Landing Page */}
                <LandingPage/>

                {/* Challenge section */}
                <ChallengeSection
                        selectedParagraph={this.state.selectedParagraph}
                        words={this.state.words}
                        characters={this.state.characters}
                        wpm={this.state.wpm}
                        timeRemaining={this.state.timeRemaining}
                        timeStarted={this.state.timeStarted}
                        testInfo ={this.state.testInfo}
                        handleUserInput={this.handleUserInput}
                        startAgain ={this.startAgain}
                
                />
                {/* Footer */}
                <Footer/>
            </div>
            ) ;
    }
}

export default App;
