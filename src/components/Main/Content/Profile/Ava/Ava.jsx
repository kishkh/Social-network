import React from 'react';
import classes from './Ava.module.css';

const Ava = (props) => {
  return (
    <div className={classes.container}>
      <img className={classes.ava} src={props.url} alt='ava'></img>
    </div>
  );
}

export default Ava;