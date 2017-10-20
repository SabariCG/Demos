import React from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import { BreadCrumbs, Button, ButtonGroup, Crumb } from 'react-lightning-design-system';
import './css/App.css';

class App extends React.Component {

	constructor(props) {
    	super(props);

    	this.state = {
      		buttons : []
    	}
    	this.handleButtonClick = this.handleButtonClick.bind(this);
  	}

  	componentWillMount() {

    	this.setState({
      		buttons : [
      			{ id: 1, name: 'New', className: 'slds-button slds-button--neutral' },
      			{ id: 2, name: 'Import', className: 'slds-button slds-button--neutral' },
      			{ id: 3, name: 'Export', className: 'slds-button slds-button--neutral' }
      			],

			crumbs : [
				{ id: 1, name: 'Qube Wire' },
				{ id: 2, name: 'Test Cases' }
				]
    	});
  	}

  	handleButtonClick(name) {
		alert('from app -> ' + name);
  	}

	render() {
    let buttons, crumbs;

    if(this.state.buttons) {
        buttons = this.state.buttons.map(button => {
          return (<Button className={button.className} label={button.name} onClick={this.handleButtonClick.bind(this, button.name)} />);
        });
    }

	if(this.state.crumbs) {
		crumbs = this.state.crumbs.map(c => {
			return (<Crumb key={c.id} href='#'>{c.name}</Crumb>);
		});
	}

	return (
				<div>
					<Header />
					<div className="slds-grid subHeader">
						<div className="slds-col slds-size--10-of-12 subHeaderElement">
							<BreadCrumbs children={crumbs}></BreadCrumbs>
						</div>
						<div className="slds-col slds-size--2-of-12 subHeaderElement">
            				<ButtonGroup children={buttons} />
						</div>
					</div>
					<div className="slds-grid">
						<div className="">
							<Filters />
						</div>
						<div className="leftAccordion"></div>
					</div>
				</div>
		)
	}
}

export default App;