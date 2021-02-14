import React from 'react';
import classes from './MyTasks.module.css';
import Task from './Task/Task';

const MyTasks = (props) => {
  
  const tasks = props.data.map(item => {
    return (
      <Task 
        dispatch={props.dispatch}
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