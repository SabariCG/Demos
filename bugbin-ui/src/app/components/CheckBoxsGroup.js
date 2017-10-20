import React, { Component } from 'react';
import CheckBox from './CheckBox';

class CheckBoxsGroup extends Component {
    constructor(props) {
      super(props);

      this.checkHandler = this.checkHandler.bind(this);
    }

    checkHandler(e) {
      this.props.cbGroupHandler(e);
    }

  	render() {

      let filter;

      if(this.props.filter.filterTypes) {
        filter = this.props.filter.filterTypes.map(f => {
            return (<CheckBox key={f.id} id={f.id} name={f.name} checked={f.checked} checkHandler={this.checkHandler} />);
        });
    }

    return (
        <div className="filterSplits">
          <fieldset className="slds-form-element">
            <legend className="slds-form-element__legend slds-form-element__label">{this.props.filter.name}</legend>
            <div className="slds-form-element__control">{filter}</div>
          </fieldset>
        </div>
    );
  }
}

export default CheckBoxsGroup;