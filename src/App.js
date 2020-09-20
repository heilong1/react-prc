import React from "react";
import TodoList from "./todo/TodoList";
import Context from "./context"

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, complit: false, title: "Купить хлеб" },
    { id: 2, complit: false, title: "Купить молоко" },
    { id: 3, complit: false, title: "Купить яйцо" },
    { id: 4, complit: true, title: "Удали их все!" },
  ]);

  function togTodo(id) {
    setTodos(
      (todos = todos.map((todo) => {
        if (todo.id === id) {
          todo.complit = !todo.complit;
        }
        return todo;
      }))
    );
  }

  function reTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (

    <Context.Provider value={ {reTodo} }>
      <div className="wrapper">
      <h1>React Practice</h1>
      {todos.length ? <TodoList todoso={todos} onToggle={togTodo} /> : <p>Новых целей нет.</p>}
    
    </div>
    </Context.Provider>
    
  );
}

export default App;
