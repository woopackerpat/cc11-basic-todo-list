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

  // newValue เป็น object ในกรณีที่มีค่าหลายค่าที่ต้องการ update
  // ให้ส่งเฉพาะค่าที่ update ก็ได้ แล้ว spread ตัวเดิมก่อน แล้วค่อยอัพเดทตัวใหม่

  const updateTodo = (newValue, id) => {
    const idx = todoList.findIndex((el) => el.id === id);
    if (idx !== -1) {
      const oldTodoList = [...todoList]
      oldTodoList[idx] = {...oldTodoList[idx],...newValue}
      setTodoList(oldTodoList)
    }
  }



  return (
    <div className="container max-w-xs pt-5">
      <TodoInput createTodo={createTodo} />
      <Filter />
      <PageLimit />
      <TodoList 
      todoList={todoList} 
      removeTodo = {removeTodo}
      updateTodo = {updateTodo}
      />
      <Pagination />
    </div>
  );
}

export default App;
