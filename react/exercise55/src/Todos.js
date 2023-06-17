import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from './todosActions';

const Todos = () => {
    const todos = useSelector(state => state);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        const newTodo = {
            id: 1,
            title: 'Buy groceries',
            completed: false
        };
        dispatch(addTodo(newTodo));
    };

    const handleRemoveTodo = () => {
        const todoIdToRemove = 1; // ID of the todo to remove
        dispatch(removeTodo(todoIdToRemove));
    };

    const handleEditTodo = () => {
        const todoIdToEdit = 1; // ID of the todo to edit
        const updatedTitle = 'Updated title';
        dispatch(editTodo(todoIdToEdit, updatedTitle));
    };

    return (
        <div>
            <h1>Todos</h1>
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={handleRemoveTodo}>Remove Todo</button>
            <button onClick={handleEditTodo}>Edit Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
