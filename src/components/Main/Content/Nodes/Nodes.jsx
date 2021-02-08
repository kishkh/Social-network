import React from 'react';
import classes from './Nodes.module.css';
import MyNodes from './MyNodes/MyNodes';

const Nodes = () => {
  return (
    <div className={classes.container}>
      <div className={classes.addPost}>
        <span>Add new Node</span>
        <div>
          <input></input>
          <button>Add</button>
        </div>
      </div>
      <MyNodes />
    </div>
  );
}

export default Nodes;