import React from "react";
import TodoList from "./todo/TodoList";

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, complit: false, title: "Купить хлеб" },
    { id: 2, complit: false, title: "Купить молоко" },
    { id: 3, complit: false, title: "Купить яйцо" },
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

  return (
    <div className="wrapper">
      <h1>React Practice</h1>
      <TodoList todoso={todos} onToggle={togTodo} />
    </div>
  );
}

export default App;
