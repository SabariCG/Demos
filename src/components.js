import React from 'react';

export function Todo(props) {
	const { todo } = props;
	if(todo.isDone) {
		return <strike>{todo.text}</strike>;
	} else {
		return <span>{todo.text}</span>;
	}
}

export function TodoList(props) {

	const { todos, toggleTodo, addTodo } = props;
	
	const onSubmit = (event) => {
		const input = event.target;
		const text = input.value;
		const isEnterKey = (event.which == 13);
		const isLongEnough = text.length > 0;
		
		if(isEnterKey && isLongEnough) {
			input.value = '';
			addTodo(text);
		}
	};
	
	const toggleClick = id => event => toggleClick(id);
	
	return (
		<div className='todo'>
			<input type='text' 
					placeholder='Add todo'
					className='todo_entry'
					onkeydown={onSubmit} />
			<ul className='todo__list'>
				{todos.map(t=>(
					<li key={t.id} 
						className='todo_item'
						onClick={toggleClick(t.get('id'))}>
						<Todo todo={t.toJS()} />
					</li>
				))}
			</ul>
		</div>
	);
}