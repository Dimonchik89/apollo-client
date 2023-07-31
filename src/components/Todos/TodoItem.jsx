import { useMutation } from '@apollo/client';
import { ALL_TODOS, UPDATE_TODO } from '../../apollo/todos';
import { useState } from 'react';

const TodoItem = ({todo, onToggle, onRemove}) => {
    

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <input 
                type="checkbox"
                checked={todo?.completed}    
                onChange={() => onToggle({
                    variables: {
                        id: todo.id,
                        completed: !todo?.completed
                    }
                })}
            />
            <p>{todo.text}</p>
            <button 
                style={{marginLeft: "10px"}}
                onClick={() => onRemove({
                    variables: {
                        id: Number(todo.id)
                    }
                })}
            >
                X
            </button>
        </div>
    )
}
export default TodoItem;