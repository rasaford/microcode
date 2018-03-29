import React, { Component } from "react";

const options = {
  ie: ["DIS"],
  interrupt: ["X"],
  kmux: ["X", "D", "K"],
  src: ["X", "AQ", "AB", "ZQ", "ZB", "ZA", "DA", "DQ", "DZ"],
  func: ["X", "ADD", "SUBR", "SUBS", "OR", "AND", "NOTRS", "EXOR", "EXNOR"],
  dest: ["X", "QREG", "NOP", "RAMA", "RAMF", "RAMQD", "RAMD", "RAMQU", "RAMU"],
  ra_addr: ["X", "RA", "r0", "r1", "r2"],
  asel: ["X", "IR", "MR"],
  rb_addr: ["X", "RB", "r0", "r1", "r2"],
  bsel: ["X", "IR", "MR"],
  abus: ["X", "H", "AB"],
  dbus: ["X", "H", "DB"],
  cin: ["X", "CI0", "CI1", "CIX", "CIC"],
  shift: ["X"],
  cemue: ["X", "H", "L"],
  cem: ["X", "H", "L"],
  status: [
    "X",
    "LOAD",
    "MA-Zero",
    "MA-NotZero",
    "MA-ULTEQ",
    "MA-ULT",
    "MA-UGT",
    "MA-UGTEQ",
    "MI-Zero",
    "MI-NotZero",
    "MI-ULTEQ",
    "MI-ULT",
    "MI-ULT",
    "MI-UGT",
    "MI-UGTEQ"
  ],
  ccen: ["X", "PS", "C"],
  am2910: ["X", "JZ", "JMAP", "CJP", "CONT"],
  bz_ld: ["X", "H", "L"],
  bz_ed: ["X", "H", "E"],
  bz_inc: ["X", "H", "I"],
  bz_ea: ["X", "H", "E"],
  ir_ld: ["X", "H", "L"],
  mwe: ["X", "R", "W"]
};
class Instruction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index === undefined ? 0 : props.index,
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

  selectOption(event, key) {
    var obj = {};
    obj[key] = event.target.value;
    this.setState(obj);
  }

  hexString(number) {
      return "0x" + number.toString(16).toUpperCase();
  }

  render() {
    var fields = [];
    for (const key of Object.keys(this.state)) {
      const option = options[key];
      if (key === "index") {
        fields.push(
          <td key={key}>
            <small>{this.hexString(this.state.index)}</small>
          </td>
        );
      } else if (option !== undefined) {
        const selectOptions = option.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ));
        fields.push(
          <td key={key}>
            <select
              value={this.state[key]}
              onChange={event => this.selectOption(event, key)}
            >
              {selectOptions}
            </select>
          </td>
        );
      } else {
        var type = typeof this.state[key] === "number" ? "number" : "text";
        fields.push(
          <td key={key}>
            <input
              value={this.state[key]}
              type={type}
              onChange={event => this.selectOption(event, key)}
            />
          </td>
        );
      }
    }
    return <tr>{fields}</tr>;
  }
}

export default Instruction;
