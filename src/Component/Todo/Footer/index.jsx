import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clear , filterSwitch} from '../../../actions';
import classnames from 'classnames'
function Footer(props) {
	const { todos, filter } = useSelector(store => store.todo)
	console.log(filter);
	const dispatch = useDispatch()
	const getLength = () => {
		return todos.filter(todo => todo.completed === true).length
	}
	const handleFilter = (e) => {
		const type = e.currentTarget.innerHTML.toLowerCase();
		dispatch(filterSwitch(type))
	}
	const handleClear = () => {
		dispatch(clear())
	}
	const btns = ['All', 'Active', 'Completed']
    return (
		todos.length > 0 &&
		<footer className="footer">
		<span className="todo-count"><strong>{getLength()}</strong> item left</span>
		<ul className="filters">
			{
				btns.map((btn, index) => {
					return (
						<li key={index}>
							<a className={classnames(`${ btn.toLocaleLowerCase() === filter && 'selected'}`)} href="#/" onClick={handleFilter}>{btn}</a>
						</li>
					)
				})

			}
		</ul>
			{
				getLength() > 0 && <button className="clear-completed" onClick={handleClear}>Clear completed</button>
			}
		</footer>
    );
}

export default Footer;