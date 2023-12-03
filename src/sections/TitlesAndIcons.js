import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitleAndIcons.css";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default class TitlesAndIcons extends Component {
  render() {
    return (
      <div>
        <Fullpage>
          <h1 className="title">{data.title}</h1>
          <div>
            <h4>{data.subtitle}</h4>
          </div>
          <div style={{ padding: 16 }}>
              <AwesomeButton size="large" href={data.resumeLink}>Resume</AwesomeButton>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map((key) => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <DownIcon />
        </Link>
        <Element name="test1" className="element"></Element>
      </div>
    );
  }
}
