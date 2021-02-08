import React from 'react';
import classes from './MyTasks.module.css';
import Task from './Task/Task';
const MyTasks = () => {
  return (

    <div className={classes.container}>
      <Task text='Some text' />
      <Task text='Hi every one' />
      <Task text='Let is writing long ' />
      <Task text='Last post' />
    </div>
  );
}

export default MyTasks;