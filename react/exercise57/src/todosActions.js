export const addTodo = todo => {
    return {
        type: 'ADD_TODO',
        payload: todo
    };
};

export const removeTodo = todoId => {
    return {
        type: 'REMOVE_TODO',
        payload: todoId
    };
};

export const editTodo = (todoId, title) => {
    return {
        type: 'EDIT_TODO',
        payload: {
            id: todoId,
            title: title
        }
    };
};
