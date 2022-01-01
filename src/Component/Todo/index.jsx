import React from 'react';
import Footer from './Footer';
import TodoHeader from './Header';
import List from './List';
import './style.scss'
function TodoList(props) {
    return (
        <section className="todoapp">
            <TodoHeader />
            <List />
            <Footer />
        </section>
    );
}

export default TodoList;