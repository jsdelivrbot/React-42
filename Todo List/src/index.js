import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './js/TodoList';
import './css/index.css';

let destination = document.querySelector('#container');

ReactDOM.render(
    <div>
        <TodoList />
    </div>,
    destination 
);