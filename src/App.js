import React, { Component } from "react";
import "./App.css";
import TitlesAndIcons from './sections/TitlesAndIcons';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import SnowStorm from 'react-snowstorm';
import DownIcon from "./components/DownIcon";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SnowStorm snowColor = "rgb(52, 152, 219)"/>
        <div className="navigation">
        </div>
        <TitlesAndIcons />
        <AboutSection />
        <SkillSection />
        <DownIcon />
      </div>
    );
  }
}

export default App;
