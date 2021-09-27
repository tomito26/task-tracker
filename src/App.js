import { useState,useEffect } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import React from 'react'
import TaskForm from './components/TaskForm';




function App() {
  const[showForm,setForm] = useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
   
    getTasks()
  },[])

  //Fetch Task from json server
  const fetchTasks  = async () =>{
    const response = await fetch(`http://localhost:5000/tasks`)
    const data = await response.json()

    return data

  }

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
      <Header  title="Task Tracker" onAdd={()=>setForm(!showForm)} showForm={showForm}/>
      {showForm && <TaskForm onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks To Show"}
    </div>
  );
}

export default App;
