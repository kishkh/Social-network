import React from 'react';
import classes from './MyNodes.module.css';
import Node from './Node/Node';
const MyNodes = () => {
  return (

    <div className={classes.container}>
      <Node text='Some text' />
      <Node text='Hi every one' />
      <Node text='Let is writing long ' />
      <Node text='Last post' />
    </div>
  );
}

export default MyNodes;