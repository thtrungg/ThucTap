export const addTask = (data) => {
    return {
        type: 'taskList/addTask',
        payload: data
    }
}