import React, { Component } from 'react';
import './App.css';
import Keypad from './components/keypad';
import Output from './components/output';
import Header from './components/header';

class App extends Component {

  state = {
    result: " "
  };
  buttonPressed = buttonName => {
    if (buttonName === "=") {
      this.calculate();
    } else 
    if (buttonName === "C") {
      this.reset()
    } else if (buttonName === "CE") {
      this.backspace();
    } else
      this.setState({
        result: this.state.result + buttonName
      });
  };
backspace = () => {
  this.setState({
    result: this.state.result.slice(0, -1)
  })
}
  reset = () => {
    this.setState({
      result: ""
    });
  }
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="calc-body">
          <Output result={this.state.result} />
          <Keypad buttonPressed={this.buttonPressed} />
        </div>

      </div>
    );
  }
}

export default App;