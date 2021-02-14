import React from 'react';
import classes from './AddMemory.module.css';
import { updateMemoryValueCreator, addMemoryCreator } from '../../../../../redux/reducers/memories-reducer';

const AddMemory = (props) => {
  const newNodeElement = React.createRef();
  const updateTextValue = () => {
    props.dispatch(updateMemoryValueCreator(newNodeElement.current.value));
  }
  const addMemory = () => {
    props.dispatch(addMemoryCreator());
  }
  return (
    <div className={classes.container}>
      <span className={classes.title}>Add new node</span>
      <div className={classes.addPost}>
        <button
          className={classes.btn}
          onClick={addMemory}
        >
          <span>+</span>
        </button>
        <textarea
          placeholder='Enter text...'
          onChange={updateTextValue}
          value={props.textValue}
          className={classes.textarea}
          ref={newNodeElement}
        />

      </div>
    </div>
  );
}

export default AddMemory;