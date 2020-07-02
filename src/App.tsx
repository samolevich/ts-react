import React from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <TodoForm />
    </>
  )
}

export default App;
