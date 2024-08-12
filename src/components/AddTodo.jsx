import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
const AddTodo = () => {

    const [todoText, setTodoText] =useState();
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();

        dispatch(addTodo(todoText))
        setTodoText('')
    }
    
    return (
        <div>
            <form onSubmit={handleAddTodo} className="flex justify-center gap-2">
                <input value={todoText} onChange={(e) => setTodoText(e.target.value)} className="text-black bg-white px-5 py-2 rounded-md" type="text" placeholder="Add Todo"/>
                <button>Add</button>
            </form>
        </div>
    );
};

export default AddTodo;