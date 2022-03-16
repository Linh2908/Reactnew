import {v4 as uuid} from 'uuid';
import { 
    MARK_COMPELE,
    ADD_WORK,
    DELETE_TODO,
    GET_TODO
} from '../contants/todoContains'

const initialState = {
    todos : [
    ]
}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_TODO : 
            return {
                ...state,
                todos : action.payload,
            }
        case MARK_COMPELE : 
            return {
                ...state,
                todos : state.todos.map(todo => {
                    if(todo.id === action.payload.id) {
                        todo.isCompele = !todo.isCompele;
                    }
                    return todo
                        
                }),
            };
        case ADD_WORK : 

            let _todos = [...state.todos];
           _todos.push({
               id : uuid(),
               title : action.payload,
               isCompele : false,
           });
            return {
                todos : _todos,
            };
        case DELETE_TODO : 
            let newTodos = [...state.todos];
            return {
                todos : newTodos.filter(todo => todo.id !== action.payload),
            }

        default:
            return state;
    }; 
};

