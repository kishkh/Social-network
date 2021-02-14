import React from 'react';
import AddMemory from './AddMemory/AddMemory';
import classes from './Memories.module.css';
import MyMemories from './MyMemories/MyMemories';

const Memories = (props) => {
  return (
    <div className={classes.container}>
      <AddMemory data={props.data} dispatch={props.dispatch}/>
      <MyMemories data={props.data}/>
    </div>
  );
}

export default Memories;