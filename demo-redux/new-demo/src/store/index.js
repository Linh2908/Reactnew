import { configureStore} from '@reduxjs/toolkit';
import {todoReducer} from './reducer/todoSlice'





// selector

// export const todoSeletor = state => state.todoReducer.allTodos;

// config

const store = configureStore({
    reducer : {
        todoReducer,
    },
});

export default store;