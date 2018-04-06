import React, { Component } from "react";
import Memory from "./Memory.js";
import Registers from "./Registers.js";

import miImage from "../img/miMachine.png";
import "./Interpreter.css";

class Interpreter extends Component {
  execute(instruction) {}
  render() {
    return (
      <div className="interpreter">
        <Memory />
        <Registers />
        <img alt="MI-Machine" src={miImage} className="display" />
      </div>
    );
  }
}

export default Interpreter;
