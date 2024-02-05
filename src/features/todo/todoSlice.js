import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
   todos: [{ id: 1, text: 'Hello' }], // initial state
}

export const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
      addTodo: (state, action) => {
         const todo = { // single todo(an object) 
            id: nanoid(),
            text: action.payload
         }
         state.todos.push(todo) // that will be pushed to an array todos
      },
      removeTodo: (state, action) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      }
   }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;



// single todo(an object) will be pushed to an array. This object has to include unique ID and payload(information)









// payload is a fancy name for data.
// Slice helps to create big object that I will export. Slice responsible for tracking initial state of the store