import React from 'react';
import classes from './MyMemories.module.css';
import Memory from './Memory/Memory';
const MyMemories = (props) => {

  const memories = props.data.map(item => {
    return <Memory text={item.memory} id={item.idMemory} />
  })
  return (
    <div className={classes.container}>
      {memories}
    </div>
  );
}

export default MyMemories;