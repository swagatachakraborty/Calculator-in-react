import React, { Component } from 'react';

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
    this.updateDisplay = this.updateDisplay.bind(this);
    this.childRef = React.createRef();

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
    buttons.push(<Button value="=" clickListener={this.updateDisplay} />);
    buttons.push(<Button value="+" clickListener={this.updateDisplay} />);
    buttons.push(<Button value="-" clickListener={this.updateDisplay} />);
    buttons.push(<Button value="*" clickListener={this.updateDisplay} />);
    buttons.push(<Button value="C" clickListener={this.updateDisplay} />);
    buttons.push(<Button value="/" clickListener={this.updateDisplay} />);
    buttons.push(<Button value="%" clickListener={this.updateDisplay} />);

    return buttons;
  }

  updateDisplay(event) {
    let clicked = event.target.id;
    this.setState({
      view: clicked
    });
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

const App = <Calculator />;

export default App;
