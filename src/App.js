import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  toggle() {
    if (this.state.pause) {
      this.interval = setInterval(() => this.tick(), 1000)
      this.setState({
        pause: false
      })
    } else {
      clearInterval(this.interval)
      this.setState({
        pause: true
      })
    }
  }

  render() {
    return (
      <div onClick={()=>this.toggle()}>
        <h2>time is:{this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default App;
