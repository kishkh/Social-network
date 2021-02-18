import React from 'react';
import classes from './MyNodes.module.css';
import Node from './Node/Node';

const MyNodes = (props) => {
  const nodes = props.nodes.map(item => {
    return (
      <Node
        key={item.idNode}
        onRemoveNode={props.onRemoveNode}
        onFavoriteNode={props.onFavoriteNode}
        fav={item.favorite}
        date={item.date} 
        text={item.node} 
        id={item.idNode}
    />
    )
  })

  return (
    <div className={classes.container}>
      { nodes }
    </div>
  );
}

export default MyNodes;