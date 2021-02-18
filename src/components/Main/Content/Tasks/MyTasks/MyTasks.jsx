import React from 'react';
import classes from './MyTasks.module.css';
import Task from './Task/Task';

const MyTasks = (props) => {
  
  const tasks = props.tasks.map(item => {
    return (
      <Task 
        key={item.idTask}
        text={item.task}
        id={item.idTask} 
      />
    )
  })
  
  return (
    <div className={classes.container}>
      { tasks }
    </div>
  );
}

export default MyTasks;