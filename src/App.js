import TodoInput from "./components/TodoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import TodoList from "./components/todo-list/TodoList";
import Pagination from "./components/pagination/Pagination";
import {v4 as uuidv4} from 'uuid'

function App() {



  const todoList = [
    {title: 'Sport', completed: true, id: uuidv4()},
    {title: 'Gaming', completed: false, id: uuidv4()},
    {title: 'Entertain', completed: true, id: uuidv4()}
  ]

  console.log(todoList)

  return (
    <div className="container max-w-xs pt-5">
      <TodoInput />
      <Filter />
      <PageLimit />
      <TodoList />
      <Pagination />
    </div>
  );
}

export default App;
