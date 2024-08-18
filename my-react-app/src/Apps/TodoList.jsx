import { useState } from "react";

function TodoList() {
  const [todoList, setTodoList] = useState([
    "Eat breakfast",
    "Learn React",
    "up to you",
  ]);
  const [todo, setTodo] = useState("");

  function handleCreateTodo() {
    const todo_input = document.getElementById("todoInput").value;
    todo_input !== "" && setTodoList((t) => [...t, todo_input]);
    document.getElementById("todoInput").value = "";
  }

  function handleDeleteTodo(index) {
    const filteredTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(filteredTodoList);
  }

  function handlePositionDown(index) {
    if (index < todoList.length - 1) {
      const updatedTodos = [...todoList];

      // this is how to change positions
      [updatedTodos[index], updatedTodos[index + 1]] = [
        updatedTodos[index + 1],
        updatedTodos[index],
      ];

      setTodoList(updatedTodos);
    }
  }

  function handlePositionUp(index) {
    if (index > 0) {
      const updatedTodos = [...todoList];

      // this is how to change positions
      [updatedTodos[index], updatedTodos[index - 1]] = [
        updatedTodos[index - 1],
        updatedTodos[index],
      ];

      setTodoList(updatedTodos);
    }
  }

  return (
    <>
      <center>
        <h1>Todo List</h1>
      </center>
      <div className="input-group mb-3">
        <input type="text" id="todoInput" className="form-control" />
        <input
          type="button"
          onClick={() => handleCreateTodo()}
          value="Create Todo"
          className="btn btn-success"
        />
      </div>
      <br />

      <table className="table">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>#</th>
            <th>Todos</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo, index) => (
            <tr key={index}>
              <td style={{ width: "10%", textAlign: "center" }}>{index + 1}</td>
              <td style={{ textAlign: "center" }}>{todo}</td>
              <td style={{ width: "30%", textAlign: "right" }}>
                <input
                  onClick={() => handleDeleteTodo(index)}
                  type="button"
                  className="btn btn-danger"
                  value="delete"
                />
                &nbsp;
                <input
                  onClick={() => handlePositionUp(index)}
                  type="button"
                  className="btn btn-primary"
                  value="up"
                />
                &nbsp;
                <input
                  onClick={() => handlePositionDown(index)}
                  type="button"
                  className="btn btn-primary"
                  value="down"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoList;
