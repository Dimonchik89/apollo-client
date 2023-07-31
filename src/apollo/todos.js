import { gql } from "@apollo/client";

export const ALL_TODOS = gql`
    query AllPosts {
        todos: allTodos {
            id
            text: title
            completed
        }
    }
`;

export const NEW_TODO = gql`
    mutation CreateTodo($title: String!, $completed: Boolean!, $userId: ID!) {
        newTodo: createTodo(title: $title, completed: $completed, user_id: $userId) {
            id
            title
            completed
            user_id
        }
    }
`;

export const UPDATE_TODO = gql`
    mutation UpdateTodo($id: ID!, $completed: Boolean) {
        updateTodo(id: $id, completed: $completed) {
            id
            title
            completed
        }
    }
`

export const REMOVE_TODO = gql`
    mutation RemoveTodo($id: ID!) {
        removeTodo(id: $id) {
            id
        }
    }
`