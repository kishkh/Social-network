import React from 'react';
import classes from './Tasks.module.css';
import MyTasks from './MyTasks/MyTasks';
import AddTask from './AddTask/AddTask';

const Tasks = (props) => {
  return (
    <div className={classes.container}>
      <AddTask 
        updateTaskValue={props.updateTaskValue}
        addTask={props.addTask} 
        textValue={props.textValue}
      />
      <MyTasks tasks={props.tasks} />
    </div>
  );
}

export default Tasks;