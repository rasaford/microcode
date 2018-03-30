import React, { Component } from "react";
import Memory from "./Memory.js";
import miImage from "../img/miMachine.png";
import "./Interpreter.css";

class Interpreter extends Component {
  execute(instruction) {}
  render() {
    return (
      <div className="interpreter">
        <Memory />
        <img alt="MI-Machine" src={miImage} className="display" />
      </div>
    );
  }
}

export default Interpreter;
