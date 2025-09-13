import React from "react";
import { useState } from "react";

const CRUD = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleClick = () => {
    if (newTask.trim() === "") {
      alert("Please enter a task");
    } else {
      setTodoList([...todoList, newTask]);
      setNewTask("");
      console.log(todoList);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          pleaceholder="Enter the tasks you want to do"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleClick}>Add task</button>
      </div>
      {todoList.length > 0 && (
        <ul>
          {todoList.map((task, index) => (
            <li key={index}>
              {task}
              <button
                onClick={() => {
                  const updatedList = todoList.filter((_, i) => i !== index);
                  setTodoList(updatedList);
                }}
              >
                Delete
              </button>
              <button onClick={()=>{
                const updateTask= prompt("Update task", task);
                if(updateTask && updateTask.trim() !== "") {
                  const updatedList = todoList.map((t, i) => 
                    i === index ? updateTask : t
                  );
                  setTodoList(updatedList);
                }
              }}>Update</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default CRUD;
