import React from "react";
import './App.css';
import NavBar from "../NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../Footer/Footer";
class App extends React.Component {
    render(){
        return(
            <div className="app">
                {/*Nav Section*/}
                <NavBar/>
                {/* Landing Page */}
                <LandingPage/>
                {/* Challenge section */}

                {/* Footer */}
                <Footer/>
            </div>
            ) ;
    }
}

export default App;