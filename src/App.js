import React from 'react';
import TodoList from './todo/TodoList'

function App() {
const todos = [
  {id: 1, complit: false, title: 'Купить хреб'},
  {id: 2, complit: false, title: 'Купить молоке'},
  {id: 3, complit: false, title: 'Купить яйцов'}
]

  return (
    <div className="wrapper">
      <h1>React Practice</h1>
      <TodoList todoso={todos}/>
    </div>
  );
}

export default App;
