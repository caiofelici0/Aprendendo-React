import React from 'react';
import "./Task.css";

const Task = ({task, handleTaskClick}) => {
  return ( 
    <div 
      className='task-container' 
      onClick={() => handleTaskClick(task.id)}
      style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}
    >
      <h2>{task.title}</h2>
    </div>
   );
}
 
export default Task;