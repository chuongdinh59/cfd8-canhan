import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../actions';

function TodoHeader(props) {

    const [value, setValue ] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setValue(e.currentTarget.value)  
    }
    const handleSubmitItem = (e) => {
      if (e.keyCode === 13) {
        dispatch(addTodo(value))
        setValue('')
      }
  }

    return (
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus value={value} onChange={handleChange} onKeyUp={handleSubmitItem}/>
        </header>
    );
}

export default TodoHeader;