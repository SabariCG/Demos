import React, { Component } from 'react';

class Button extends Component {

  handleClick(name) {
    this.props.handleButtonClick(name);
  }

  render() {
    return (<a className={this.props.className} href="#" onClick={this.handleClick.bind(this, this.props.name)}>{this.props.name}</a>);
  }
}

export default Button;