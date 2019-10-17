import React, { Component } from "react";
import data from "./data.json"
import "./App.css";
import { SocialIcon } from 'react-social-icons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">

        </div>
        <div className="fullpage">
          <h1 className="title">
            {data.title}
          </h1>
          <div>
            <h4>
              {data.subtitle}
            </h4>
          </div>
          <div>
            {
              Object.keys(data.links).map(key=>{
                return(
                  <SocialIcon url={data.links[key]} />
                )
              })
            }
          </div>
        </div>
        <div className="fullpage">
            <h3>
              {data.section[0].title}
            </h3>
            <p>
              {data.section[0].items[0].content}
            </p>
        </div>
        <div className="fullpage">

        </div>

      </div>
    );
  }
}

export default App;
