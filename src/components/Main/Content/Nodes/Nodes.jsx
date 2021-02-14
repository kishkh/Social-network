import React from 'react';
import classes from './Nodes.module.css';
import MyNodes from './MyNodes/MyNodes';
import AddNode from './AddNode/AddNode';


const Nodes = (props) => {
  return (
    <div className={classes.container}>
      <AddNode dispatch={props.dispatch} textValue={props.data.textValue}/>
      <MyNodes dispatch={props.dispatch} data={props.data.nodes}/>
    </div>
  );
}

export default Nodes;