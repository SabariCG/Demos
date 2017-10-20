import React, { Component } from 'react';
import CheckBoxsGroup from './CheckBoxsGroup';
import { Button, DateInput } from 'react-lightning-design-system';

class Filters extends Component {

  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    this.startDateValueChange = this.startDateValueChange.bind(this);
    this.endDateValueChange = this.endDateValueChange.bind(this);
    this.cbGroupHandler = this.cbGroupHandler.bind(this);
  }

  getInitialState() {
    return ({
      startDate: '',
      endDate: '',
      filters: [
        		{ 	id: 1,
          			name: "Category",
          			filterTypes: [
        			{ id: 1, name: "Positive", checked: false }, 
        			{ id: 2, name: "Negative", checked: false }
        		]},

        		{ 	id: 2,
          			name: "ExecutionType",
          			filterTypes: [
        			{ id: 1, name: "Any", checked: false }, 
        			{ id: 2, name: "Automated", checked: false }, 
        			{ id: 3, name: "Manual", checked: false }
        		]},

        		{ 	id: 3,
          			name: "Priority",
          			filterTypes: [
        			{ id: 1, name: "Critical", checked: false }, 
        			{ id: 2, name: "High", checked: false }, 
        			{ id: 3, name: "Medium", checked: false }, 
        			{ id: 4, name: "Low", checked: false }
        		]},

        		{ 	id: 4,
          			name: "Type",
          			filterTypes: [
        			{ id: 1, name: "Acceptance", checked: false }, 
        			{ id: 2, name: "Accessibility", checked: false }, 
        			{ id: 3, name: "Compatability", checked: false }, 
        			{ id: 4, name: "Functional", checked: false }, 
        			{ id: 5, name: "Performance", checked: false }, 
        			{ id: 6, name: "Regression", checked: false }, 
        			{ id: 7, name: "Security", checked: false }, 
        			{ id: 8, name: "Smoke & Sanity", checked: false }, 
        			{ id: 9, name: "Usability", checked: false }, 
        			{ id: 10, name: "Other", checked: false }
        		]
      		}]
    });
  }

  handleApplyBtnClick(name) {
    console.log(this.state);
    alert(name);
  }

  handleClearBtnClick(name) {
    console.log(this.getInitialState());
    this.setState(this.state = this.getInitialState());
  }

  startDateValueChange(val) {
    console.log(val);
    this.setState({ startDate: val,
                    endDate: this.state.endDate }, () => console.log(this.state));
  }

  endDateValueChange(val) {
    console.log(val);
    this.setState({ startDate : this.state.startDate,
                    endDate: val }, () => console.log(this.state));
  }

  cbGroupHandler(e) {
    let key = e.target.value;

    console.log(name);

    this.setState((prevState) => ({
      filters: prevState.filters.map(filter => ({
        ...filter,
        filterTypes: filter.filterTypes.map(f => ({
          ...f,
          checked: f.name == key  ? !f.checked : f.checked
        }))
      }))
    }), () => {
      console.log(this.state)
    })
  }

  render() {

  	let filters;

  	if(this.state.filters) {
  		filters = this.state.filters.map(filter => {
  			return (<CheckBoxsGroup key={filter.id} filter={filter} cbGroupHandler={this.cbGroupHandler} />);
  		});
    }

    return (
        <div className="leftAccordion">
        	<div className="filterHeaderDiv">
          		<p><strong>Filters</strong></p>
          		<div className="filterButtons">
                <div className="clearButton">
          			 <Button className="slds-button-clear" onClick={this.handleClearBtnClick.bind(this, "Clear")}>Clear</Button>
                </div>
                <div>
          			 <Button type="neutral" onClick={this.handleApplyBtnClick.bind(this, "Apply")}>Apply</Button>
                </div>
          		</div>
          	</div>
          	<div className="filterChilds">
          		<p><strong>Created On</strong></p>
              <div className="createdOnDiv">
                <div className="dataInputs">
                  <DateInput className="dataInput" value={this.state.startDate} onValueChange={this.startDateValueChange.bind(this)} placeholder="Start Date" />
                </div>
                <div>
                  <DateInput className="dataInput" value={this.state.endDate} onValueChange={this.endDateValueChange.bind(this)} placeholder="End Date" />
                </div>
              </div>
          		<div>{filters}</div>
          	</div>
        </div>
      );
  }
}

export default Filters;