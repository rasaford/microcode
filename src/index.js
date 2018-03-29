import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PunchCard from "./PunchCard.js";
import registerServiceWorker from "./registerServiceWorker";

class App extends Component {
  render() {
    return (
      <div className="main">
        <PunchCard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
