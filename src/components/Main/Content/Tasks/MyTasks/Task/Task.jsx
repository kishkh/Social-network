import React from 'react';
import classes from './Task.module.css';

const Task = (props) => {
  return (
    <div className={classes.container}>
      <span> id{props.id} - {props.text}</span>
      <button>Forget</button>
    </div>
  );
}

export default Task;