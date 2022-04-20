import TodoInput from "./components/TodoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import TodoList from "./components/todo-list/TodoList";
import Pagination from "./components/pagination/Pagination";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const initialTodoList = [
    { title: "Sport", completed: true, id: uuidv4() },
    { title: "Gaming", completed: false, id: uuidv4() },
    { title: "Entertain", completed: true, id: uuidv4() },
  ];

  const [todoList, setTodoList] = useState(initialTodoList);

  const createTodo = (title) => {
    const newTodo = {
      title,
      completed: false,
      id: uuidv4(),
    };

    const oldTodoList = [...todoList];
    oldTodoList.unshift(newTodo);
    setTodoList(oldTodoList);
  };

  // ใช้ splice หรือ filter ก็ได้ แต่ filter จะใช้เวลานานกว่า
  // ไม่ควรใช้ splice ใน forEach -> เนื่องจากจะทำให้เกิดการรวนใน loop
  const removeTodo = (id) => {
    const idx = todoList.findIndex((el) => el.id === id);
    if (idx !== -1) {
      const oldTodoList = [...todoList];
      oldTodoList.splice(idx, 1);
      setTodoList(oldTodoList);
    }
  };

  return (
    <div className="container max-w-xs pt-5">
      <TodoInput createTodo={createTodo} />
      <Filter />
      <PageLimit />
      <TodoList todoList={todoList} removeTodo = {removeTodo}/>
      <Pagination />
    </div>
  );
}

export default App;
