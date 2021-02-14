import React from 'react';
import classes from './Node.module.css';
import {removeNodeCreator} from '../../../../../../redux/reducers/nodes-reducer';
const Node = (props) => {
  const deleteNode = () => {
    props.dispatch(removeNodeCreator(props.id))
  }
  
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <span className={classes.small}>{props.id}. </span>
        <span className={classes.node}>{props.text}</span> 
        <span className={classes.small}>{`${props.date.slice(0, props.date.length-3)}`}</span>
      </div>
      <button className={classes.btn} onClick={ deleteNode } >
        <span>x</span>
      </button>
    </div>
  );
}

export default Node;