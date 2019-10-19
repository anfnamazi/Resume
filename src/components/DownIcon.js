import React, { Component } from "react";
import data from "../data.json";

export default class DownIcon extends Component {
    render() {
        return (
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: 'transLateY( -30px)',
                cursor: "pointer"
            }} onClick={this.props.onClick} >
                <img src={data.icons} style={{ height: "40px", position: "absolute" }} />
            </div>
        )
    }
}
