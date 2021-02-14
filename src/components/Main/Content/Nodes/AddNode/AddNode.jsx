import React from 'react';
import classes from './AddNode.module.css';
import {updateTextValueCreator, addNodeCreator} from './../../../../../redux/reducers/nodes-reducer';

const AddNode = (props) => {
  const newNodeElement = React.createRef();
  const updateTextValue = () => {
    props.dispatch(updateTextValueCreator(newNodeElement.current.value));
  }
  const addNode = () => {
    props.dispatch(addNodeCreator());
  }
  return (
      <div className={classes.container}>
        <span className={classes.title}>Add new node</span>
        <div className={classes.addPost}>
          <textarea 
            onChange={ updateTextValue } 
            value={props.textValue}
            className={classes.textarea}
            ref={newNodeElement}  
          />
          <button 
            className={classes.btn}
            onClick={ addNode }
          >
            <span>+</span>
          </button>
        </div>
      </div>  
  );
}

export default AddNode;