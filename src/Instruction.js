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
  toHexString(number) {
    return "0x" + number.toString(16).toUpperCase();
  }

  render() {
    let fields = [];
    let data = this.props.data;
    for (const key of Object.keys(data)) {
      let element = null;
      if (key === "index") {
        element = <small>{this.toHexString(data.index)}</small>;
      } else if (options[key] !== undefined) {
        const selectOptions = options[key].map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ));
        element = (
          <select
            value={data[key]}
            onChange={event => this.props.onChange(key, event.target.value)}
          >
            {selectOptions}
          </select>
        );
      } else {
        var type = typeof data[key] === "number" ? "number" : "text";
        element = (
          <input
            value={data[key]}
            type={type}
            onChange={event => this.props.onChange(key, event.target.value)}
          />
        );
      }
      fields.push(<td key={key}>{element}</td>);
    }
    let bgColor = {
      backgroundColor: this.props.selected ? "green" : "none"
    };
    return <tr style={bgColor}>{fields}</tr>;
  }
}

export default Instruction;
