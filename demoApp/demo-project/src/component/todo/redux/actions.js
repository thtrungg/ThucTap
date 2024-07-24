export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchFilter = (text) => {
    return {
        type: 'fillter/search',
        payload: text
    }
}
