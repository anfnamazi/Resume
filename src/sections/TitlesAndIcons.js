import React, { Component } from "react";
import Fullpage from '../components/Fullpage';
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';

export default class TitlesAndIcons extends Component {
    render() {
        return (
            <div>
                <Fullpage className="first">
                    <h1 className="title">
                        {data.title}
                    </h1>
                    <div>
                        <h4>
                            {data.subtitle}
                        </h4>
                    </div>
                    <div className="icons-wrapper">
                        {
                            Object.keys(data.links).map(key => {
                                return (
                                    <div className="icon">
                                        <SocialIcon url={data.links[key]} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </Fullpage>
            </div>
        );
    }
}
