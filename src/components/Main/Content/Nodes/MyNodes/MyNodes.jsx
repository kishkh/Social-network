import React from 'react';
import classes from './MyNodes.module.css';
import Node from './Node/Node';

const MyNodes = (props) => {
  const nodes = props.data.map(item => {
    return (
      <Node
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