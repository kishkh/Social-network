import React from 'react';
import classes from './AddTask.module.css';
import { updateTaskValueCreator, addTaskCreator } from '../../../../../redux/reducers/tasks-reducer';

const AddTask = (props) => {
  const newNodeElement = React.createRef();
  const updateTextValue = () => {
    props.dispatch(updateTaskValueCreator(newNodeElement.current.value));
  }
  const addNode = () => {
    props.dispatch(addTaskCreator());
  }
  return (
    <div className={classes.container}>
      <span className={classes.title}>Add new node</span>
      <div className={classes.addPost}>
        <button
          className={classes.btn}
          onClick={addNode}
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

export default AddTask;