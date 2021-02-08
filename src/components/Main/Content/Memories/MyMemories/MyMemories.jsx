import React from 'react';
import classes from './MyMemories.module.css';
import Memory from './Memory/Memory';
const MyMemories = () => {
  return (

    <div className={classes.container}>
      <Memory text='Some text' />
      <Memory text='Hi every one' />
      <Memory text='Let is writing long ' />
      <Memory text='Last post' />
    </div>
  );
}

export default MyMemories;