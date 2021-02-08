import React from 'react';
import classes from './Tasks.module.css';
import MyTasks from './MyTasks/MyTasks';

const Tasks = () => {
  return (
    <div className={classes.container}>
      <div className={classes.addPost}>
        <span>Add new Task</span>
        <div>
          <input></input>
          <button>Add</button>
        </div>
      </div>
      <MyTasks />
    </div>
  );
}

export default Tasks;