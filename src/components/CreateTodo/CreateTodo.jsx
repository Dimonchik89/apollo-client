import { useMutation } from "@apollo/client"
import { useState } from "react"
import { ALL_TODOS, NEW_TODO } from "../../apollo/todos"

const CreateTodo = () => {
    const [value, setValue] = useState("")
    const [addTodo, { loading, error, data }] = useMutation(NEW_TODO, {
        // refetchQueries: [
        //     {query: ALL_TODOS}
        // ]
        update(cache, { data : { newTodo }}) {
            const { todos } = cache.readQuery({ query: ALL_TODOS })
            cache.writeQuery({
                query: ALL_TODOS,
                data: {
                    todos: [newTodo, ...todos]
                }
            })
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({
            variables: {
                title: value,
                completed: false,
                userId: 123
            }
        })
        setValue("")
    }

    if(error) {
        return <h1>Error!</h1>
    }

    return (
        <form 
            onSubmit={handleSubmit}
            style={{display: "flex", maxWidth: "600px", margin: "0 auto"}}
        >
            <input 
                type="text"
                style={{flex: "1 0 auto"}}  
                value={value}
                onChange={e => setValue(e.target.value)}  
            />
            <button>Create</button>
        </form>
    )
}
export default CreateTodo;