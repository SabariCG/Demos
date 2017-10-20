import React, { Component } from 'react';
import Button from './Button';

class Buttons extends Component {

  handleClick(name) {
    this.props.handleButtonClick(name);
  }

  render() {
    let buttons;
    if(this.props.buttons) {
        buttons = this.props.buttons.map(button => {
          return (<Button key={button.id} name={button.name} className={button.className} handleButtonClick={this.handleClick.bind(this, button.name)} />);
        });
    }

    return (
        <div className="buttons">
          {buttons}
        </div>
      );
  }
}

export default Buttons;