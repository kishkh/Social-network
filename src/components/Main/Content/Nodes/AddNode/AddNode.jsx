import React from 'react';
import classes from './AddNode.module.css';


const AddNode = (props) => {

  const newNodeElement = React.createRef();

  const updateNodeValue = () => {
    props.onUpdateNodeValue(newNodeElement.current.value);
  }

  return (
    <div className={classes.container}>
      <span className={classes.title}>Add new node</span>
      <div className={classes.addPost}>
        <button
          className={classes.btn}
          onClick={props.onAddNode}
        >
          <span>+</span>
        </button>
        <textarea
          placeholder='Enter text...'
          onChange={updateNodeValue}
          value={props.textValue}
          className={classes.textarea}
          ref={newNodeElement}
        />
      </div>
    </div>
  );
}

export default AddNode;