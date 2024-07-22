// REDUCERS
// là 1 funciton
const initValue = { value : 0}

const rootReducer = (state = initValue , action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            }
        case 'todolist/increment':
            return {
                ...state,
                value: state.value + action.payload
            }
        default:
            return state;
    }

}

// ACTIONS
const INCREMENT = {
    type: 'todoList/increment',
    payload: 10
}

// ACTIONS CREATOR 
const incrementCreator = (data) => {
    return{
        type: 'todoList/increment',
        payload: data
    }
}

// DISPATCH
