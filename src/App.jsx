import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";

import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "Estudar react",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Estudar node",
      completed: false,
    },
  ]);

  const handleTaskAddition = (tasktitle) => {
    const newTasks = [...tasks, {
      id: uuidv4(),
      title: tasktitle,
      completed: false,
    }];
    
    setTasks(newTasks);
  }
  
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId)
        return {...task, completed: !task.completed};
      
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
      </div>
    </>
  );
}

export default App;