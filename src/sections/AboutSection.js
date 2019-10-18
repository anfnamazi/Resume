import React, { Component } from "react";
import Fullpage from '../components/Fullpage';
import data from "../data.json";

export default class AboutSection extends Component {
    render() {
        return (
            <div>
                <Fullpage className="second">
                    <h3>
                        {data.section[0].title}
                    </h3>
                    <p>
                        {data.section[0].items.map(p => <p> {
                            p.content
                        }</p>)}
                    </p>
                </Fullpage>
            </div>
        );
    }
}
