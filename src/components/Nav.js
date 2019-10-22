import React, { Component } from 'react'
import data from '../data.json'
import './Nav.css'
import { Link, Element } from 'react-scroll'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav style={{ color: this.props.style.color, backgroundColor: this.props.style.backgroundColor }}>
                    <ul className="nav">
                        <li onClick={this.props.onClick}>{this.props.name}</li>
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
