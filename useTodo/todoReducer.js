

const todoReducer = ( inicialState, action ) => {

    switch ( action.type ) {
        case 'add':
            
            return [
                ...inicialState, 
                action.payload
            ];
        case 'remove':
            return inicialState.filter(todo => todo.id !== action.payload.id);
        case 'toggle':
            return inicialState.map((todo) => {

                if ( todo.id === action.payload.id ) return {
                    ...todo,
                    done: !todo.done
                }

                return todo
            });
        default:
            return inicialState;        
    }
}


export {
    todoReducer
}