import React from 'react';
import classes from './Bio.module.css';

const Bio = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.bioPlace}>
        <div>{`Name: ${props.name}`}</div>
        <div>{`Age: ${props.age}`}</div>
        <div>{`Place of Birth: ${props.place}`}</div>
      </div>
    </div>
  );
}

export default Bio;