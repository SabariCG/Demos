import React, { Component } from 'react';
import './css/index.css';
import './css/App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';
import FiltersDiv from './components/FiltersDiv';

class App extends Component {
  constructor() {
    super();

    this.state = {
      buttons : []
    }

    this.handle1Click = this.handle1Click.bind(this);
  }

  componentWillMount() {

    this.setState({
      buttons : [
      { id: 1, name: 'New', className: 'buttonLeft' },
      { id: 2, name: 'Import', className: 'buttonCenter' },
      { id: 3, name: 'Export', className: 'buttonRight' }
      ],

      filters: [
        { id: 1,
          name: "Category",
          filterEntries: [
        { id: 1, name: "Positive" }, 
        { id: 2, name: "Negative" }
        ]},

        { id: 2,
          name: "ExecutionType",
          filterEntries: [
        { id: 1, name: "Any" }, 
        { id: 2, name: "Automated" }, 
        { id: 3, name: "Manual" }
        ]},

        { id: 3,
          name: "Priority",
          filterEntries: [
        { id: 1, name: "Critical" }, 
        { id: 2, name: "High" }, 
        { id: 3, name: "Medium" }, 
        { id: 4, name: "Low" }
        ]},

        { id: 4,
          name: "Type",
          filterEntries: [
        { id: 1, name: "Acceptance" }, 
        { id: 2, name: "Accessibility" }, 
        { id: 3, name: "Compatability" }, 
        { id: 4, name: "Functional" }, 
        { id: 5, name: "Performance" }, 
        { id: 6, name: "Regression" }, 
        { id: 7, name: "Security" }, 
        { id: 8, name: "Smoke & Sanity" }, 
        { id: 9, name: "Usability" }, 
        { id: 10, name: "Other" }
        ]
      }]
    });
  }

  handle1Click(name) {
    alert(name);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="header1">
          <Buttons buttons={this.state.buttons} handleButtonClick={this.handle1Click.bind(this)} />
        </div>
        <FiltersDiv filters={this.state.filters} />
      </div>
    );
  }
}

export default App;