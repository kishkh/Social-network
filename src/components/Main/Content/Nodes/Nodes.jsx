import React from 'react';
import classes from './Nodes.module.css';
import MyNodes from './MyNodes/MyNodes';
import AddNode from './AddNode/AddNode';


const Nodes = (props) => {
  return (
    <div className={classes.container}>
      <AddNode 
        onAddNode={props.onAddNode} 
        onUpdateNodeValue={props.onUpdateNodeValue}
        textValue={props.textValue}
      />
      <MyNodes 
        onRemoveNode={props.onRemoveNode}
        onFavoriteNode={props.onFavoriteNode}
        nodes={props.nodes}
      />
    </div>
  );
}

export default Nodes;