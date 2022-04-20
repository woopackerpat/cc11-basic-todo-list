import { useState } from "react";
import Button from "./ui/Button";

function TodoInput(props) {
  const [todoInput, setTodoInput] = useState("");
  // ถ้ามี error หลายตัวอาจจะเก็บเป็น object
  const [todoError, setTodoError] = useState("");
  // เซ็ต logic ด้านนอกเพื่อไม่ให้โค๊ดใน jsx ยาวจนเกินไป
  const handleClickCreateBtn = () => {
    if (!todoInput) {
      setTodoError("Title is required");
    } else {
      props.createTodo(todoInput);
      setTodoError('')
      setTodoInput('')
    }
  }

  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className= {`form-control ${todoError ? 'is-invalid' : ''}`}
          placeholder="Enter new todo"
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)}
        />
        <Button
          color="success"
          onClick={() => handleClickCreateBtn()}
        >
          {/* สามารถเขียนสั้นๆได้ เพราะถึงแม้เขียน 0 ก็จะเป็น string ที่มีค่า อาจใช้อีกวิธีคือ if(!todoInput) */}
          <i className="fa-solid fa-plus" />
        </Button>
        <Button color="outline-secondary" onClick={() => setTodoInput("")}>
          {" "}
          <i className="fa-solid fa-xmark" />
        </Button>
      </div>
      {todoError && <small class="text-danger">{todoError}</small>}
    </>
  );
}

export default TodoInput;
