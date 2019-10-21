import React, { Component } from 'react'
import data from '../data.json'
import './Nav.css'
import { Link, Element } from 'react-scroll'

export default class Nav extends Component {

    constructor() {
        super()
        this.state = {
            color: "#3498DB",
            backgroundColor: "#fff"
        }
    }

    changeTheme = () =>
        this.setState({
            color: this.state.color === "#3498DB" ? "#fff" : "#3498DB",
            backgroundColor: this.state.backgroundColor === "#fff" ? "#6B8096" : "#fff"
        })


    render() {
        return (
            <div>
                <nav style={{ color: this.state.color, backgroundColor: this.state.backgroundColor }}>
                    <ul className="nav">
                        <li onClick={() => this.changeTheme()}>{data.nav.links[0].content}</li>
                        <li>
                            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={0} duration={500} >
                                <a>{data.nav.links[1].content}</a>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="test2" spy={true} smooth={true} offset={0} duration={500} >
                                <a>{data.nav.links[2].content}</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
