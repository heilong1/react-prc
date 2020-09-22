import React from "react";
import TodoList from "./todo/TodoList";
import TodoReturner from './todo/TodoRet'
// import AddTodo from './todo/addTodo'
import Context from "./context"

function App() {

const todoMain = [
  { id: 1, complit: false, title: "Купить хлеб" },
  { id: 2, complit: false, title: "Купить молоко" },
  { id: 3, complit: false, title: "Купить яйцо" },
  { id: 4, complit: true, title: "Удали их все!" },
]

  let [todos, setTodos] = React.useState(todoMain);

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

  function returnTodo() {
    setTodos(
      (todos = todoMain)
    )
  }

  function remTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (

    <Context.Provider value={ {remTodo} }>
      <div className="wrapper">
      <h1>React Practice</h1>
      {/* <AddTodo/> */}

      {todos.length ? <TodoList todoso={todos} onToggle={togTodo} /> : <TodoReturner ret={returnTodo} />}
    
    </div>
    </Context.Provider>
    
  );
}

export default App;
