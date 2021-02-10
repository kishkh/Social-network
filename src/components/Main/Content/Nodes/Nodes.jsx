import React from 'react';
import classes from './Nodes.module.css';
import MyNodes from './MyNodes/MyNodes';

const Nodes = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.addPost}>
        <span>Add new Node</span>
        <div>
          <input></input>
          <button>Add</button>
        </div>
      </div>
      <MyNodes data={props.data}/>
    </div>
  );
}

export default Nodes;