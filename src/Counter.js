import React from 'react';
import ReactDOM from 'react-dom';

var CounterDisplay = React.createClass({
	render: function(){
		return <div>
		<div>{this.props.counterProp}</div>
		<button onClick={this.props.incrementCounter}>+</button>
		<button onClick={this.props.decrementCounter}>-</button>
		</div>
	},

	propTypes: {
		counterProp: React.PropTypes.number.isRequired,
		incrementCounter: React.PropTypes.func.isRequired,
		decrementCounter: React.PropTypes.func.isRequired
	}
});

var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	handleIncrement() {
		this.setState({counter: this.state.counter + 1});
	},

	handleDecrement() {
		this.setState({ counter: this.state.counter - 1});
	},

	render: function() {
		return <div>
			<h2>{this.props.name}</h2>
			<CounterDisplay counterProp={this.state.counter}
							incrementCounter={this.handleIncrement}
							decrementCounter={this.handleDecrement}></CounterDisplay>
		</div>;
	}
});

class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	render() {
		return <h1>{this.props.name}</h1>
	}
}

export default Comment;