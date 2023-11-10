import React, { Component } from "react";
import "./App.css";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Nav from "../src/components/Nav";
import SnowStorm from "react-snowstorm";
import DownIcon from "./components/DownIcon";
import { Link, Element } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";
class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: {
        light: {
          color: "#769FCD",
          backgroundColor: "#F7FBFC",
          backgroundColor2: "#D6E6F2",
        },
        dark: {
          color: "#fff",
          backgroundColor: "#334257",
          backgroundColor2: "#476072",
        },
      },
      type: "light",
    };
  }

  changeTheme = () =>
    this.setState({
      type: this.state.type === "light" ? "dark" : "light",
    });

  render() {
    return (
      <div
        className="App"
        style={{
          color: this.state.theme[this.state.type].color,
          backgroundColor: this.state.theme[this.state.type].backgroundColor,
        }}
      >
        <SnowStorm
          snowColor={this.state.theme[this.state.type].color}
          key={this.state.theme[this.state.type].color}
        />
        <Element name="test3" className="element"></Element>
        <Nav
          onClick={() => this.changeTheme()}
          name={this.state.type === "light" ? <FaMoon /> : <FaSun />}
          style={{
            color: this.state.theme[this.state.type].color,
            backgroundColor: this.state.theme[this.state.type].backgroundColor2,
          }}
        />
        <TitlesAndIcons />
        <AboutSection />
        <SkillSection theme={this.state.theme[this.state.type]} />
        <Link
          activeClass="active"
          to="test3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <DownIcon style={{ transform: "rotate(180deg) transLateY(60px)" }} />
        </Link>
      </div>
    );
  }
}

export default App;
