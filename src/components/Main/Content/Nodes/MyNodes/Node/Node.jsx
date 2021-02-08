import React from 'react';
import classes from './Node.module.css';

const Node = (props) => {
  return (
    <div className={classes.container}>
      <span>{props.text}</span>
      <button>Forget</button>
    </div>
  );
}

export default Node;