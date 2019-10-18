import React, { Component } from "react";
import "./App.css";
import TitlesAndIcons from './sections/TitlesAndIcons'
import AboutSection from './sections/AboutSection'
import SkillSection from './sections/SkillSection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">
        </div>
        <TitlesAndIcons />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default App;
