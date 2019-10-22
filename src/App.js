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

  constructor() {
    super()
    this.state = {
      color: "#3498DB",
      backgroundColor: "#fff",
      backgroundColor2: "#eee",
      title:"night_mode"
    }
  }

  changeTheme = () =>
  this.setState({
      color: this.state.color === "#3498DB" ? "#fff" : "#3498DB",
      backgroundColor: this.state.backgroundColor === "#fff" ? "#363537" : "#fff",
      backgroundColor2: this.state.backgroundColor2 === "#eee" ? "#6B8096" : "#eee",
      title: this.state.title === "night_mode" ? "light_mode" : "night_mode"
  })

  render() {
    return (
      <div className="App" style={{ color: this.state.color, backgroundColor: this.state.backgroundColor }}>
        <SnowStorm snowColor={this.state.color} />
        <Element name="test3" className="element"></Element>
        <Nav onClick={() => this.changeTheme()} name={this.state.title} style={{ color: this.state.color, backgroundColor: this.state.backgroundColor2 }} />
        <TitlesAndIcons />
        <AboutSection />
        <SkillSection />
        <Link activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={500}>
          <DownIcon style={{ transform: "rotate(180deg) transLateY(60px)" }} />
        </Link>
      </div>
    );
  }
}

export default App;
