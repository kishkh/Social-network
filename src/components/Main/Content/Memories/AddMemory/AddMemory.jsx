import React from 'react';
import classes from './AddMemory.module.css';

const AddMemory = (props) => {
  const updateTextValue = (e) => {
    props.updateMemoryValue(e.target.value)
  }

  return (
    <div className={classes.container}>
      <span className={classes.title}>Add your kind memories</span>
      <div className={classes.addPost}>
        <button
          className={classes.btn}
          onClick={props.addMemory}
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

export default AddMemory;