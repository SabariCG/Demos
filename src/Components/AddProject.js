import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();

    this.state = {
      newProject: {}
    }
  }
	static defaultProps =  {
		categories : ["Web Design", "Web Developement", "Mobile Developement"]
	};

	handleOnSubmit (e) {
		if(this.refs.title.value === ''){
      alert('Title is required');
    }
    else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addProject(this.state.newProject);
      });
    }
		e.preventDefault();
	};

  render() {
  	let categoryOptions;
  	categoryOptions = this.props.categories.map(category => {
  		return (<option key={category} value={category}>{category}</option>);
  	});

    return (
      <div className="AddProject">
    	<h3>Add Project</h3>
    	<form onSubmit={this.handleOnSubmit.bind(this)}>
    		<div>
    			<label>Title</label>
    			<input type="text" ref="title" />
    			<label>Category</label>
    			<select ref="category">
    				{categoryOptions}
    			</select>
    			<input type="submit" value="Submit"/>
    		</div>
    	</form>  	
      </div>
    );
  }
}

export default AddProject;