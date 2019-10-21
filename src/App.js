import React, { Component } from "react";
import "./App.css";
import TitlesAndIcons from './sections/TitlesAndIcons';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import Nav from '../src/components/Nav'
import SnowStorm from 'react-snowstorm';
import DownIcon from "./components/DownIcon";
import { Link, Element } from 'react-scroll';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SnowStorm snowColor="rgb(52, 152, 219)" flakesMax={160} />
        <Element name="test3" className="element"></Element>
        <Nav />
        <TitlesAndIcons />
        <AboutSection />
        <SkillSection />
        <Link activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={500} >
          <DownIcon style={{ transform: "rotate(180deg) transLateY(60px)" }} />
        </Link>
      </div>
    );
  }
}

export default App;
