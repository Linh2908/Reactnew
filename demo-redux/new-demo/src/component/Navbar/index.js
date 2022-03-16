import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Navbar() {
    const todos = useSelector(state => state.todoReducer.allTodos);
    return ( 
        <div>
            <ul>
                <li><Link  to='/'>Home</Link></li>
                <li><Link  to='/about'>About</Link></li>
                <li><Link  to='/todolist'>Todo List : {todos && todos.length}</Link></li>
            </ul>
            <Outlet/>
        </div>
     );
}

export default Navbar;