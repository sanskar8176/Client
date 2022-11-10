import React from 'react';
import './App.css';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todolist from './components/Todolist';

function App() {
  return (
    <div> 
      <Header/>
      <TodoForm/>
      <Todolist/>
    </div>
  )
}

export default App