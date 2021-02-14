import React from 'react';
import classes from './Task.module.css';

const Task = (props) => {
  const empty = () => {}
  return (

    <div className={classes.container}>
      <div className={classes.text}>
        <div className={classes.smallContainer}>
          <span className={classes.small}>{props.id}. </span>
        </div>
        <span className={classes.node}>{props.text}</span>
        <div className={classes.btnContainer}>
          <button className={classes.btnDel} onClick={empty} >
            <span>D</span>
          </button>
          <button className={classes.btnFav} onClick={empty} >
            <span>F</span>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Task;