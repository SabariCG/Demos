import React, { Component } from 'react';

class CheckBox extends Component {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.checkHandler(e);
	}

  render() {

	return (
			<div className="squaredFour">
				<input type="checkbox" id={this.props.name+"_"+this.props.id} value={this.props.name} onChange={this.handleChange}></input>
				<label htmlFor={this.props.name+"_"+this.props.id}>{this.props.name}</label>
			</div>
		);
  }
}

export default CheckBox;