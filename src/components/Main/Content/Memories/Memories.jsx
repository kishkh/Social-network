import React from 'react';
import classes from './Memories.module.css';
import MyMemories from './MyMemories/MyMemories';

const Memories = () => {
  return (
    <div className={classes.container}>
      <div className={classes.addPost}>
        <span>Add new Memory</span>
        <div>
          <input></input>
          <button>Add</button>
        </div>
      </div>
      <MyMemories />
    </div>
  );
}

export default Memories;