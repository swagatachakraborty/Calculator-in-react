import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  getValue() {
    return this.state.value;
  }

  render() {
    return (
      <div id={this.state.value} class="btn">
        {this.state.value}
      </div>
    );
  }
}

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  updateDisplay(newValue) {
    this.setState({
      value: newValue
    });
  }

  getCurrentState() {
    return this.state.value;
  }

  render() {
    return <div class="display"> {this.state.value} </div>;
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: props.display,
      buttons: props.buttons
    };
  }

  render() {
    return (
      <div class="calculator">
        {this.state.display}
        <div class="btns">{this.state.buttons}</div>
      </div>
    );
  }
}

const buttons = [];
buttons.push(<Button value="1" />);
buttons.push(<Button value="2" />);
buttons.push(<Button value="3" />);
buttons.push(<Button value="4" />);
buttons.push(<Button value="5" />);
buttons.push(<Button value="6" />);
buttons.push(<Button value="7" />);
buttons.push(<Button value="8" />);
buttons.push(<Button value="9" />);
buttons.push(<Button value="0" />);
buttons.push(<Button value="." />);

buttons.push(<Button value="+" />);
buttons.push(<Button value="-" />);
buttons.push(<Button value="*" />);
buttons.push(<Button value="/" />);
buttons.push(<Button value="%" />);

buttons.push(<Button value="C" />);
buttons.push(<Button value="=" />);

const App = <Calculator display={<Display />} buttons={buttons} />;

export default App;
