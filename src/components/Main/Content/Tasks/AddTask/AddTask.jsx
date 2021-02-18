import React from 'react';
import classes from './AddTask.module.css';

const AddTask = (props) => {
  const updateTextValue = (e) => {
    props.updateTaskValue(e.target.value)
  }
  return (
    <div className={classes.container}>
      <span className={classes.title}>Add new task</span>
      <div className={classes.addPost}>
        <button
          className={classes.btn}
          onClick={props.addTask}
        >
          <span>+</span>
        </button>
        <textarea
          placeholder='Enter text...'
          onChange={updateTextValue}
          value={props.textValue}
          className={classes.textarea}
        />

      </div>
    </div>
  );
}

export default AddTask;