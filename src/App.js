import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import React from 'react'
import TaskForm from './components/TaskForm';




function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:"Doctor's appointment",
        day:"Feb 5th at 2.30",
        reminder:true
    },
    {
        id:2,
        text:"Meeting at School",
        day:"Feb 6th at 1.30pm",
        reminder:true

    },
    {
        id:3,
        text:"Food shopping",
        day:"Feb 5th at 2.30pm",
        reminder:false
    }
  ])

  //Add Tasks
  const addTask = (task)=>{
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id,...task}
    const newTasks = [...tasks,newTask]
    setTasks(newTasks)

  }
  //Delete Task
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = id =>{
    setTasks(tasks.map(task=> task.id === id ? {...task,reminder:!task.reminder} : task ))
  }

  return (
    <div className="container">
      <Header  title="Task Tracker"/>
      <TaskForm onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks To Show"}
    </div>
  );
}

export default App;
