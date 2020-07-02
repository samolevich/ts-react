import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (title: string) => {
    setTodos(prev => [title, ...prev]);
  }

  return (
    <>
      <Navbar />
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </>
  )
}

export default App;
