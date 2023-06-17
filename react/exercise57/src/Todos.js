import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, editTodo } from './todosActions';

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        const newTodo = {
            id: Date.now(),
            title: 'New Todo',
            completed: false
        };
        dispatch(addTodo(newTodo));
    };

    const handleRemoveTodo = id => {
        dispatch(removeTodo(id));
    };

    const handleEditTodo = (id, title) => {
        dispatch(editTodo(id, title));
    };

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                        <button onClick={() => handleEditTodo(todo.id, 'Updated Todo')}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
