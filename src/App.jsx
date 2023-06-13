import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header"

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
    if(tasktitle === "")
      return;

    const newTasks = [...tasks, {
      id: uuidv4(),
      title: tasktitle,
      completed: false,
    }];
    
    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

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
    <Router>
      <div className="container">
        <Header />
        <Routes>
            <Route 
              path="/"
              exact
              element={
                <>
                  <AddTask handleTaskAddition={handleTaskAddition} />
                  <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
                </>
              }
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;