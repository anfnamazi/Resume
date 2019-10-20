import React, { Component } from "react";
import Fullpage from '../components/Fullpage';
import data from "../data.json";
import './AboutSection.css';
import DownIcon from "../components/DownIcon";
import { Link, Element } from 'react-scroll';

export default class AboutSection extends Component {
    render() {
        return (
            <div>
                <Fullpage>
                    <h3>
                        {data.section[0].title}
                    </h3>
                    <p>
                        {data.section[0].items.map(p => <p> {
                            p.content
                        }</p>)}
                    </p>
                </Fullpage>
                <Link activeClass="active" to="test2" spy={true} smooth={true} offset={0} duration={500}>
                    <DownIcon />
                </Link>
                <Element name="test2" className="element"></Element>
            </div>
        );
    }
}
