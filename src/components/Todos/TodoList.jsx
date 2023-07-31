import { useMutation, useQuery } from "@apollo/client";
import { ALL_TODOS, REMOVE_TODO, UPDATE_TODO } from '../../apollo/todos';
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { loading, error, data } = useQuery(ALL_TODOS)
    const [ toggleTodo, { error: toggleError}] = useMutation(UPDATE_TODO)
    const [ removeTodo, { error: removeError }] = useMutation(REMOVE_TODO, {
        update(cache, { data: { removeTodo }}) {
            cache.modify({
                fields: {
                    allTodos(currentTodo = []) {
                        return currentTodo.filter(todo => todo.__ref !== `Todo:${removeTodo.id}`)
                    }
                }
            })
        }
    })

    if(loading) {
        return <h2>Loading...</h2>
    }

    if(error || toggleError || removeError) {
        return <h2>Error!!!</h2>
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100vw"}}>
            {
                data.todos.map(todo => <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onRemove={removeTodo}/>)
            }
        </div>
    )
}
export default TodoList;