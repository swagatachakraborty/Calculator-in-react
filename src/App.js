import React, { Component } from 'react';
import calculateResult from './mathUtil';

class Button extends Component {
  render() {
    return (
      <div id={this.props.value} class="btn" onClick={this.props.clickListener}>
        {this.props.value}
      </div>
    );
  }
}

class Display extends Component {
  render() {
    return <div class="display">{this.props.view}</div>;
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.numberStack = [];

    this.updateDisplay = this.updateDisplay.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.getResult = this.getResult.bind(this);

    this.state = {
      view: '0',
      buttons: this.createButtons()
    };
  }

  createButtons() {
    const buttons = [];
    for (let i = 1; i <= 9; i++) {
      buttons.push(<Button value={i} clickListener={this.updateDisplay} />);
    }

    buttons.push(<Button value="." clickListener={this.updateDisplay} />);
    buttons.push(<Button value="0" clickListener={this.updateDisplay} />);

    buttons.push(<Button value="=" clickListener={this.getResult} />);
    buttons.push(<Button value="+" clickListener={this.updateDisplay} />);
    buttons.push(<Button value="-" clickListener={this.updateDisplay} />);
    buttons.push(<Button value="*" clickListener={this.updateDisplay} />);

    buttons.push(<Button value="C" clickListener={this.clearDisplay} />);

    buttons.push(<Button value="/" clickListener={this.updateDisplay} />);
    buttons.push(<Button value="%" clickListener={this.updateDisplay} />);

    return buttons;
  }

  updateNumberStack(clicked) {
    const lastIndex = this.numberStack.length - 1;
    let lastValue = this.numberStack[lastIndex];

    if (isNaN(clicked) || isNaN(lastValue)) {
      this.numberStack.push(clicked);
      return;
    }

    this.numberStack[lastIndex] = lastValue + clicked;
  }

  updateDisplay(event) {
    let clicked = event.target.id;
    let oldView = this.state.view;

    if (this.state.view === '0') {
      oldView = '';
    }

    this.setState({
      view: oldView + clicked
    });
    this.updateNumberStack(clicked);
  }

  getResult() {
    const result = calculateResult(this.numberStack);
    if (isNaN(result)) return;
    this.setState({
      view: result
    });
    this.numberStack = [result];
  }

  clearDisplay() {
    this.setState({
      view: '0'
    });
    this.numberStack = [];
  }

  render() {
    return (
      <div class="calculator">
        <Display view={this.state.view} />
        <div class="btns">{this.state.buttons}</div>
      </div>
    );
  }
}

export default Calculator;
