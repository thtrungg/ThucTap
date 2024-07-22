const initState = {
    fillter:{
        search : '',
        status : 'All',
        priority : []
    },
    todolist:
    [
        {id: 1, name : 'Learn Redux', completed : true, priority: 'Medium'},
        // {id: 2, name : 'Learn Redux', completed : false, priority: 'Medium'},
        // {id: 3, name : 'Learn Redux', completed : false, priority: 'Medium'}
    ]
}

export default function rootReducer(state = initState , action) {
    console.log({state, action})
    switch(action.type){
        case 'todoList/addTodo':
            return{
                ...state,
                todolist : [
                    ...state.todolist,
                    action.payload
                ]
            }

        case 'fillter/search':
            return{
                ...state,
                fillter:
                    {
                        ...state.fillter,
                        search: action.payload
                    }
            }
        default:
            return state;
    }

}
