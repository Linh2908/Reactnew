import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name : 'todos',
    initialState :{
        allTodos : [
            {
                id : 1,
                title : 'viec 1',
                isCompele : false,
            },
            {
                id : 2,
                title : 'viec 1',
                isCompele : false,
            },
            {
                id : 3,
                title : 'viec 1',
                isCompele : false,
            },
        ],
    },
});

// reducer 

export const todoReducer = todoSlice.reducer;

 