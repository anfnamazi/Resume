import React, { Component } from "react";
import "./SkillCard.css";

export default class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card" style={{ backgroundColor: this.props.bgColor }}>
        <div className="image-wrapper">
          <img src={skill.content.image} alt="" />
        </div>
        <div className="skill-title">
          <h4>{skill.content.title}</h4>
        </div>
      </div>
    );
  }
}
