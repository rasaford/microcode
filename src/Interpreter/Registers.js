import React, { Component } from "react";

class Registers extends Component {
  constructor(props) {
    super(props);
    let registers = [];
    for (let i = 0; i < 16; i++) {
      registers.push({
        name: "r" + i,
        machineAccessible: i <= 8,
        value: 0
      });
    }
    this.state = {
      registers: registers
    };
  }

  handleChange(event, register) {
    let number = Number.parseInt(event.target.value, 10);
    if (Number.isNaN(number)) {
      number = 0;
    }
    if (number < 0 || number > 1 << 16) {
      console.log(number);
      return;
    }
    let reg = this.state.registers.slice();
    let index = reg.findIndex(item => item.name === register.name);
    let newReg = JSON.parse(JSON.stringify(register));
    newReg.value = number;
    reg[index] = newReg;
    this.setState({
      registers: reg
    });
  }

  render() {
    let display = this.state.registers.map((reg, i) => (
      <tr key={i}>
        <td>{reg.name}</td>
        <td>
          <input
            type="number"
            value={reg.value}
            onChange={e => this.handleChange(e, reg)}
          />
        </td>
      </tr>
    ));
    return (
      <div className="registers">
        <h3>Registers</h3>
        <table>
          <thead>
            <th>
              <td>name</td>
              <td />
            </th>
          </thead>
          <tbody>{display}</tbody>
        </table>
      </div>
    );
  }
}

export default Registers;
