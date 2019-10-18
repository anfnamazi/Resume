import React, { Component } from "react";
import Fullpage from '../components/Fullpage';
import data from "../data.json";
import SkillCard from '../components/SkillCard'

export default class SkillSection extends Component {
    render() {
        return (
            <div>
                <Fullpage className="third">
                    <h3>
                        {data.section[1].title}
                    </h3>
                    <div className="cards-wrapper">
                        {data.section[1].items.map(eachskill => {
                            return (
                                <SkillCard skill={eachskill}/>
                            );
                        })}
                    </div>
                </Fullpage>
            </div>
        );
    }
}
