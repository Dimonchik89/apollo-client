import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/Todos/TodoList'
import CreateTodo from './components/CreateTodo/CreateTodo'

function App() {

  return (
    <>
      <CreateTodo/>
      <TodoList/>
    </>
  )
}

export default App
