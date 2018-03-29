import React, { Component } from "react";

class Memory extends Component {
  constructor() {
    this.state = {
        memory: Array(255).fill(0),
    }
  }

  clear() {
      this.setState({
          memory: this.state.memory.slice().fill(0),
      });
  }

  write(index, value) {
    if (index < 0 || index >= this.memory.length) {
      return;
    }
    let changedMem = this.state.memory.slice();
    changedMem[index] = value;
    this.setState({
        memory: changedMem,
    });
  }

  read(index) {
    if (index < 0 || index >= this.memory.length) {
      return;
    }
    return this.state.memory[index];
  }
}
