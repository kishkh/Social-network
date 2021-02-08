import React from 'react';
import classes from './Memory.module.css';

const Memory = (props) => {
  return (
    <div className={classes.container}>
      <span>{props.text}</span>
      <button>Forget</button>
    </div>
  );
}

export default Memory;