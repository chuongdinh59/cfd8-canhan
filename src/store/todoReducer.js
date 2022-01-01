const init = JSON.parse(localStorage.getItem('todos')) || []
const setItem = (todos) => {
    localStorage.setItem('todos',JSON.stringify(todos))
}
const initialState = {
    todos: init,
    filter: 'all',
    filters: {
        all : () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editIndex: null

}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            if (action.payload.value) {
                state.todos.push(action.payload)
                setItem(state.todos)
            }
            break;
        case 'TOGGLE':
            const toggleItem = action.payload.index
            if (!!action.payload) {
                state.todos[toggleItem].completed = !state.todos[toggleItem].completed
                setItem(state.todos)
            }
            break;
        case 'TOGGLEALL':
            const {completed} = action.payload
            state.todos?.forEach(todo => {
                todo.completed = completed
            })
            setItem(state.todos)

            break;
        case 'DESTROY':
            const destroyItem = action.payload.index
            if (!!action.payload) {
                state.todos.splice(destroyItem, 1)
                setItem(state.todos)
                
            }
            break;
        case 'SWITCH':
            const { type } = action.payload
            if (type) {
                state.filter = type
                setItem(state.todos)
            }
            break;
        case 'CLEAR':
            state.todos = state.todos.filter(todo => todo.completed === false);
            setItem(state.todos)
            break;
        case 'START_EDIT':
            const editItem  = action.payload.index
            state.editIndex = editItem
            setItem(state.todos)
            break;
        case 'END_EDIT': 
            state.todos[state.editIndex].value = action.payload.newValue
            state.editIndex = null
            setItem(state.todos)
            break
        case 'CANCEL_EDIT':
            state.editIndex = null
            break
        default:
            return state
    }
    return {
        ...state
    }
}

export default todoReducer