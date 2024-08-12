import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice";
const Todos = () => {

    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <ul>
                    {todos.map(todo => (
                        <li className="mt-4 flex justify-between items-center bg-zinc-800 rounded-md px-4 py-2" key={todo.id}>
                            <div>{todo.item}</div>
                            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todos;