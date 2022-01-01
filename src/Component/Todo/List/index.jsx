import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleAll } from '../../../actions';
import TodoItem from '../TodoItem';

function List(props) {
    const { todos,filters, filter } = useSelector(store => store.todo)
    const checkRef = useRef()
    const dispatch = useDispatch()
    const handleRevert = () => {
        dispatch(toggleAll(checkRef.current.checked))
    }
    useEffect(() => {
        if (todos.every(todo => todo.completed === true) && todos.length > 0) {
            checkRef.current.checked = true
            console.log(10);
        }
        else {
            checkRef.current.checked = false
        }
    }, )  
    // Muốn thêm dependeces ở đây 
    return (
        <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" onClick={handleRevert} ref={checkRef}/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
            {/* <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
           {/* <TodoItem /> */}
            {
                    todos.length > 0  &&  todos.filter(filters[filter]).map( (todo, index ) => {
                        return <TodoItem key={index} value={todo.value} completed={todo.completed} index={index}/>
                })
            }
        </ul>
    </section>
    );
}

export default List;