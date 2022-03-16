import React, { useEffect } from "react";
import {connect} from 'react-redux';
import {
    markCompele,
    deleteTodo,
    getTodo,
} from '../../action/todoAction';
import TodoFrom from "./TodoForm";

function Todolist({todos, markCompele, deleteTodo, getTodo}) {

    useEffect(() => {
        getTodo()
    }, []);
    return ( 
        <div>
        <TodoFrom/>
            <ul>
                {
                  todos.length!== 0 &&  todos.map(todo => (
                        <li key={todo.id}  style= {  { color : todo.isCompele ?  'green' : ''}} >
                            {todo.title}
                            
                            <div>
                                <input type={'checkbox'} onChange={() => markCompele(todo.id)}/>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
     );
};

const mapStateToProp = state => ({
    todos : state.todoReducer.todos,
})

export default connect(mapStateToProp, {getTodo,markCompele, deleteTodo})(Todolist);