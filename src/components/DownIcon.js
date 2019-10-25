import React, { Component } from "react";
import data from "../data.json";
import './DownIcon.css'

export default class DownIcon extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <div className="drop" >
                    <img src={data.icons} style={{ height: "40px", position: "absolute" }} />
                </div>
            </div>
        )
    }
}
