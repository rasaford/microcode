import React, { Component } from "react";
import "./App.css";
import Instruction from "./Instruction.js";

class PunchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructionCounter: 0,
      instructions: [<Instruction key={0} index={0} />]
    };
  }

  addInstruction() {
    const counter = this.state.instructionCounter + 1;
    const newInstr = <Instruction key={counter} index={counter} />;
    const oldInstr = this.state.instructions.slice();
    this.setState({
      instructionCounter: counter,
      instructions: oldInstr.concat([newInstr])
    });
  }

  removeInstruction() {
    const counter = this.state.instructionCounter - 1;
    const oldInstr = this.state.instructions;
    if (oldInstr === null || oldInstr.length === 0) {
      return;
    }
    this.setState({
      instructionCounter: counter,
      instructions: oldInstr.slice(0, oldInstr.length - 1)
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addInstruction()} value="ADD">
          +
        </button>
        <button onClick={() => this.removeInstruction()} value="REMOVE">
          -
        </button>
        <table>
          <thead>
            <tr>
              <td />
              <td>IE</td>
              <td>Interrupt</td>
              <td>kmux</td>
              <td>Constant</td>
              <td>Source</td>
              <td>Function</td>
              <td>Destination</td>
              <td>RA Address</td>
              <td>A Select</td>
              <td>RB Address</td>
              <td>B Select</td>
              <td>A bus</td>
              <td>D Bus</td>
              <td>CIN MUX</td>
              <td>Shift</td>
              <td>cemue</td>
              <td>cem</td>
              <td>status register</td>
              <td>ccen</td>
              <td>am2910</td>
              <td>direct data</td>
              <td>BZ_LD</td>
              <td>BZ_ED</td>
              <td>BZ_INC</td>
              <td>BZ_EA</td>
              <td>IR_LD</td>
              <td>MWE</td>
            </tr>
          </thead>
          <tbody>{this.state.instructions}</tbody>
        </table>
      </div>
    );
  }
}

export default PunchCard;
