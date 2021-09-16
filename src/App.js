import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import React from 'react'


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
        reminder:"false"
    }
  ])

  return (
    <div className="container">
      <Header  title="Task Tracker"/>
      <Tasks tasks = {tasks} />
    </div>
  );
}

export default App;
