import React from "react";
import { useSelector } from 'react-redux';
import TodoForm from './TodoForm';
function TodoList() {
    const todos = useSelector(state => state.todoReducer.allTodos);
    return ( 
        <>

        <h1>THis  is a todo</h1>
        <TodoForm/>
        <ul>
                {
                  todos.length!== 0 &&  todos.map(todo => (
                        <li key={todo.id}  style= {  { color : todo.isCompele ?  'green' : ''}} >
                            {todo.title}
                            
                            {/* <div>
                                <input type={'checkbox'} onChange={() => markCompele(todo.id)}/>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </div> */}
                        </li>
                    ))
                }
            </ul>
        </>
     );
}

export default TodoList;