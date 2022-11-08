import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";



const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
}

const useTodo = () => {
  
    const [ todos, dispatch ] = useReducer(todoReducer, [], init)

    useEffect(() => {
      
        localStorage.setItem('todos', JSON.stringify(todos))        
      
    }, [todos])

    

    const onNewTodo = ( todo ) => {
        const action = {
            type: 'add',
            payload: todo,
        }
        dispatch( action );
    }

    const onDeleteTodo= (todo) => {
        
        console.log(todo)
        dispatch({
            type: 'remove',
            payload: todo
        });
    }

    const onToggleTodo = ( todo ) => {
        dispatch({
            type: 'toggle',
            payload: todo
        });
    }

  
  return {
    todosCounter: todos.length,
    pendingTodosCounter: todos.filter((todo)=>!todo.done).length,
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
  };
}

export default useTodo
