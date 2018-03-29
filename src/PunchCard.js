import React, { Component } from "react";
import "./App.css";
import Instruction from "./Instruction.js";

class Instr {
  constructor(index) {
    // defaults for an instruction
    this.data = {
      index: index,
      ie: "DIS",
      interrupt: "X",
      kmux: "X",
      constant: 0,
      src: "X",
      func: "X",
      dest: "NOP",
      ra_addr: "X",
      asel: "X",
      rb_addr: "X",
      bsel: "X",
      abus: "H",
      dbus: "H",
      cin: "CI0",
      shift: "X",
      cemue: "H",
      cem: "H",
      status: "X",
      ccen: "X",
      am2910: "CONT",
      direct: "X",
      bz_ld: "H",
      bz_ed: "H",
      bz_inc: "H",
      bz_ea: "H",
      ir_ld: "H",
      mwe: "R"
    };
  }
}

class PunchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInstruction: 0,
      instructionCounter: 0,
      instructions: [new Instr(0)]
    };
  }

  handleChange(index, key, value) {
    let instr = this.state.instructions.slice();
    instr[index].data[key] = value;
    this.setState({
      instructions: instr
    });
  }

  renderInstruction(instruction) {
    let index = instruction.data.index;
    let selected = index === this.state.currentInstruction;
    return (
      <Instruction
        key={index}
        data={instruction.data}
        selected={selected}
        onChange={(key, value) => this.handleChange(index, key, value)}
      />
    );
  }

  addInstruction() {
    const counter = this.state.instructionCounter + 1;
    const newInstr = new Instr(counter);
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

  step() {
    this.setState({
      currentInstruction: Math.min(
        this.state.currentInstruction + 1,
        this.state.instructions.length - 1
      )
    });
  }

  reset() {
    this.setState({
      currentInstruction: 0
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
        <button onClick={() => this.step()} value="STEP">
          Step
        </button>
        <button onClick={() => this.reset()} value="RESET">
          Reset
        </button>
        <table>
          <thead
            style={{
              transform: "rotate(90 deg)",
              transformOrigin: "left top 0"
            }}
          >
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
          <tbody>
            {this.state.instructions.map(i => this.renderInstruction(i))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PunchCard;
