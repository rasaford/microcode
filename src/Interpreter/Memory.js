import React, { Component } from "react";

class Memory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memory: Array(256).fill(0)
    };
  }

  clear() {
    this.setState({
      memory: this.state.memory.slice().fill(0)
    });
  }

  write(index, value) {
    if (index < 0 || index >= this.memory.length) {
      return;
    }
    let changed = this.state.memory.slice();
    changed[index] = value;
    this.setState({
      memory: changed
    });
  }

  read(index) {
    if (index < 0 || index >= this.memory.length) {
      return;
    }
    return this.state.memory[index];
  }

  renderMemory(data) {
    let rows = [];
    for (let i = 0; i < data.length; i++) {
      rows.push(
        <tr key={i}>
          <td>{toHexString(i)}</td>
          <td>{toHexString(data[i])}</td>
        </tr>
      );
    }
    return rows;
  }

  render() {
    return (
      <div className="memory">
        <h3>Memory</h3>
        <table>
          <thead>
            <tr>
              <th>index</th>
              <th>data</th>
            </tr>
          </thead>
          <tbody>{this.renderMemory(this.state.memory)}</tbody>
        </table>
      </div>
    );
  }
}

function toHexString(decimal) {
  return "0x" + decimal.toString(16).toUpperCase();
}

export default Memory;
