import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PunchCard from "./PunchCard.js";
import Interpreter from "./Interpreter/Interpreter.js";

import registerServiceWorker from "./registerServiceWorker";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Interpreter />
        <PunchCard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
