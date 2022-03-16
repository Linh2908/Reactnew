import axios from 'axios';
import { ADD_WORK, DELETE_TODO, GET_TODO, MARK_COMPELE } from "../contants/todoContains";

// export const markCompele = () => {
//     const markCompeleAction = (dispatch) => {
//         dispatch({
//             type : MARK_COMPELE,
//             payload : {

//             }
//         });
//     };

//     return markCompeleAction;
// }

// Get TOdo

export const getTodo  = () => async dispatch => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
        dispatch({
            type : GET_TODO,
            payload : response.data,
        })
    } catch (error) {
        console.log(error);
    }
}

export const markCompele = id => (dispatch) => {
  dispatch({
    type: MARK_COMPELE,
    payload: {
      id,
    },
  });
};

// add 

export const addWord = title =>  async dispatch => {
    try {
        await axios.post('https://jsonplaceholder.typicode.com/users/1/todos',title);
        dispatch(
            {
                type : ADD_WORK,
                payload : title,
            }
        );

    } catch (error) {
        
    }
   
};

//  DELETE TODO

export const deleteTodo = id => dispatch => {
    console.log('ok');
    dispatch({
        type : DELETE_TODO,
        payload : id,
    });
};

