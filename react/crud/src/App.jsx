
import './App.css'
import React, { useState } from 'react';
import Task from './Task';

function App() {
  const[todoList, setTodoList] =useState([]);
  const [newTask, setNewTask] = useState('');

  const update=(e)=>{
    setNewTask(e.target.value);
  }
  
  const addTask=()=>{
    const task={
      id:todoList.length===0 ? 1 : todoList[todoList.length-1].id+1,
      taskName: newTask
    }
    const newtodoList=[...todoList, task];
    setTodoList(newtodoList);
  }
  const deleteTask=(id)=>{
    const newTodoList=todoList.filter((task)=>task.id!=id);
    setTodoList(newTodoList);
  }
  return (
    <>
      <div className="App">
        <div class="addTask">
          <input onChange={update}/>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {todoList.map((task, index)=>(
            <div key={index} className='task'>
           <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
           </div>
          ))}
        </div>
     
      </div>
    </>
  )
}

export default App
