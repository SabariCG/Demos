import React, { Component } from 'react';
import Button from './Button';

class FiltersDiv extends Component {

  handleClick(name) {
  	alert(name);
  }

  render() {
  	let filters;

  	if(this.props.filters) {
  		filters = this.props.filters.map(filter => {
  			return (<MyFilter key={filter.id} filter={filter} />);
  		});
  	}

    return (
        <div className="leftAccordion">
        	<div className="filterHeaderDiv">
          		<p><strong>Filters</strong></p>
          		<div className="filterButtons">
          			<Button className="noborderbutton" name="Clear" handleButtonClick={this.handleClick.bind(this)} />
          			<Button className="button" name="Filter" handleButtonClick={this.handleClick.bind(this)} />
          		</div>
          	</div>
          	<div className="filterChilds">
          		<p><strong>Created On</strong></p>
          		<Calendar placeholder="Start Date" />
          		<Calendar placeholder="End Date" />
          		<div>{filters}</div>
          	</div>
        </div>
      );
  }
}

class MyFilter extends Component {
	render() {
		let filter;
		if(this.props.filter.filterEntries) {
			filter = this.props.filter.filterEntries.map(f => {
				return (<CustomCheckBox key={f.id} name={f.name} />);
			});
		}

		return (
			<div `>
				<p><strong>{this.props.filter.name}</strong></p>
				{filter}
			</div>
		);
	}
}

class CustomCheckBox extends Component {
	render() {
		return (
			<div>
				<input type="checkbox" value={this.props.name}></input>
				<span>{this.props.name}</span>
			</div>
		);
	}
}

class Calendar extends Component {
	render() {
		return (
			<div>
				<input type="text" className="form-control date-picker" placeholder={this.props.placeholder} />
				<span className="glyphicon glyphicon-calendar calendarSpan"></span>
			</div>
		);
	}
}

export default FiltersDiv;