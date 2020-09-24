import React, { useEffect } from "react";
import TodoList from "./todo/TodoList";
import TodoReturner from "./todo/TodoRet";
import AddTodo from "./todo/addTodo";
import Context from "./context";
// import Loader from "./loader";

function App() {
  const todoMain = [
    { id: 1, complit: false, title: "Купить хлеб" },
    { id: 2, complit: false, title: "Купить молоко" },
    { id: 3, complit: false, title: "Купить яйцо" },
    { id: 4, complit: true, title: "Удали их все!" },
  ];

  let [todos, setTodos] = React.useState(todoMain);
  // const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
        }, 3000);
      });
  }, []);

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
    setTodos((todos = todoMain));
  }

  function addTo(title) {
    setTodos(
      todos.concat([
        {
          id: todos.length + 1,
          complit: false,
          title,
        },
      ])
    );
  }

  function remTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ remTodo }}>
      <div className="wrapper">
        <h1>React Practice</h1>
        <p>3 сек фетчится новый лист, один раз</p>

        {/* Логика обуления списка */}
        {todos.length ? (
          <TodoList todoso={todos} onToggle={togTodo} />
        ) : (
          // Здесь надо вывести два компонента!!!
          <TodoReturner ret={returnTodo} />
        )}
        {/* Кнопка добавления */}
        <AddTodo addToo={addTo} />
      </div>
    </Context.Provider>
  );
}

export default App;

/*
1. Использование тернарного оператора в шаблоне, блок кода на каждый вариант,
и в этом блоке кода выполняется всего одно действие, например не появляются
дублированные компоненты.

2. Этот основной компонент Арр содержит один лог, но он выполняется дважды.

3. Фетч с сервера засунуть в условие обнуления, и повторять каждый раз.
Также засунуть в этот тернарный оператор доп компонент лоадинг картинки.

*/