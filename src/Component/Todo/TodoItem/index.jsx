import classnames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelEdit, destroy, endEdit, startEdit, toggle } from '../../../actions';
function TodoItem({ value, index, completed }) {
    const { editIndex } = useSelector(store => store.todo)
    const [input , setInput ] = useState(value)

    const dispatch = useDispatch()
    const handleChecked = () => {
        dispatch(toggle(index))
    }
    const handleDelete = () => {
        dispatch(destroy(index))

    }
    const handleEdit = () => {
        dispatch(startEdit(index))
    }
    const handleEndEdit_Cancel = (e) => {
        if (e.keyCode === 13) {
            dispatch(endEdit( input))
        }
        if (e.keyCode === 27) {
            dispatch(cancelEdit())
        }
    }
    const handleChange = (e) => {
        setInput(e.currentTarget.value)
    }
    return (
        <>
            <li className={classnames({ completed: completed }, {active: !completed} , `${index === editIndex && 'editing'}`) } >
						<div className="view">
                            <input className="toggle" type="checkbox" checked={completed} onChange={handleChecked}/>
                            <label onDoubleClick={(index) => handleEdit(index)}>{value}</label>
							<button className="destroy" onClick={handleDelete}></button>
						</div>
                <input className="edit" value={input} onChange={handleChange} onKeyUp={handleEndEdit_Cancel} onBlur={() => dispatch(cancelEdit())} autoFocus/>
            </li>
        </>
    );
}

export default TodoItem;