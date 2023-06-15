import TodoList from './TodoList';

function App() {
    const handleRenderTodoList = (items, handleRemoveItem) => {
        return (
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleRemoveItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <TodoList render={handleRenderTodoList} />
        </div>
    );
}

export default App;