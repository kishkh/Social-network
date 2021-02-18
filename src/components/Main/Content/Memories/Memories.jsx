import React from 'react';
import AddMemory from './AddMemory/AddMemory';
import classes from './Memories.module.css';
import MyMemories from './MyMemories/MyMemories';

const Memories = (props) => {
  return (
    <div className={classes.container}>
      <AddMemory 
        textValue={props.textValue} 
        addMemory={props.addMemory}
        updateMemoryValue={props.updateMemoryValue}
      />
      <MyMemories memories={props.memories}/>
    </div>
  );
}

export default Memories;