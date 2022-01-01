import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clear, filter } from '../../../actions';

function Footer(props) {
	const { todos } = useSelector(store => store.todo)
	const dispatch = useDispatch()
	const getLength = () => {
		return todos.filter(todo => todo.completed === true).length
	}
	const handleFilter = (e) => {
		const type = e.currentTarget.innerHTML.toLowerCase();
		dispatch(filter(type))
	}
	const handleClear = () => {
		dispatch(clear())
	}
    return (
		todos.length > 0 &&
		<footer className="footer">
		{/* <!-- This should be `0 items left` by default --> */}
		<span className="todo-count"><strong>{getLength()}</strong> item left</span>
		{/* <!-- Remove this if you don't implement routing --> */}
		<ul className="filters">
			<li>
				<a className="selected" href="#/" onClick={handleFilter}>All</a>
			</li>
			<li>
				<a href="#/active" onClick={handleFilter}>Active</a>
			</li>
			<li>
				<a href="#/completed" onClick={handleFilter}>Completed</a>
			</li>
		</ul>
		{/* <!-- Hidden if no completed items are left ↓ --> */}
			{
				getLength() > 0 && <button className="clear-completed" onClick={handleClear}>Clear completed</button>
			}
		</footer>
    );
}

export default Footer;