import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state of the todo list
const initialState = {
    todos: [{
        id: 'id',        // Unique identifier for the todo item
        item: 'Hello'    // The actual todo text
    }],
    users:{
        id:'id',
        name:'arnab'
    }
};

// Creating a slice for todo functionality
export const todoSlice = createSlice({
    name: 'todo',       // Name of the slice, used in actions and selectors
    initialState,       // The initial state defined above
    reducers: {
        // Reducer for adding a todo item
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),            // Generates a unique id for the new todo
                item: action.payload     // The text of the new todo item, passed in action payload
            }
            state.todos.push(todo);      // Add the new todo item to the state's todo list
        },
        // Reducer for removing a todo item
        removeTodo: (state, action) => {
            // Filters out the todo item whose id matches the id in the action payload
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
})

// Exporting the action creators for use in components
export const { addTodo, removeTodo } = todoSlice.actions;

// Exporting the reducer to be included in the store
export default todoSlice.reducer;
