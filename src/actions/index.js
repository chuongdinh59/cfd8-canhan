

export const addTodo = (value) => {
    return {
        type: 'ADD',
        payload: {
            value: value,
            completed: false
        }
    }
}
export const toggle = (index) => {
    return {
        type: 'TOGGLE',
        payload: {index}
    }
}

export const toggleAll = (completed) => {
    return {
        type: 'TOGGLEALL',
        payload: {completed}
    }
}

export const destroy = (index) => {
    return {
        type: 'DESTROY',
        payload: {index}
    }
}
export const filterSwitch = (type) => {
    return {
        type: 'SWITCH',
        payload: {type}
    }
}

export const clear = () => {
    return {
        type:'CLEAR'
    }
}
export const startEdit = (index) => {
    return {
        type: 'START_EDIT',
        payload: {index}
    }
}
export const endEdit = ( newValue) => {
    return {
        type: 'END_EDIT',
        payload: {newValue}
    }
}

export const cancelEdit = () => {
    return {
        type: 'CANCEL_EDIT'
    }
}